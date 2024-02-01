import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  Input,
  SimpleChanges,
  DoCheck,
  OnChanges,
  ChangeDetectorRef,
} from '@angular/core';
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
} from '@angular/forms';
import * as models from '../../models/models';
import {
  crTable,
  xpTable,
  difficulties,
  crTypes,
  justTypes,
  acTable,
} from 'src/app/shared/constants';
import * as animations from '../../animations';

import { 
  MonsterService 
} from 'src/app/services/monster.service';
import { KeyValueDiffers } from '@angular/core';

@Component({
  selector: 'app-monster-form',
  templateUrl: './monster-form.component.html',
  styleUrls: ['./monster-form.component.scss'],
  animations: [
    animations.slideInAnimation,
    animations.fadeInAnimation,
    animations.fadeAnimation,
    animations.rowInOutAnimation,
    animations.pageFadeAnimation
  ]
})
export class MonsterFormComponent implements OnInit, DoCheck, OnChanges {
  constructor(private _formBuilder: FormBuilder, private monsterService: MonsterService, private differs: KeyValueDiffers, private cd: ChangeDetectorRef) {
    this.differ = differs.find({}).create();
  }
  @Input() layout;
  @Input() players : models.Player[];
  @Output() generateCombat = new EventEmitter<Array<models.Combatant>>();
  differ: any;

  ngOnChanges(changes: SimpleChanges):void{
    if(changes.layout){
      this.layout = changes.layout.currentValue;
    }
    if(changes.players){
      this.players = changes.players.currentValue;
    }
  }
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    var changes = this.differ.diff(this.players);
    console.log(changes);
		if(changes) {
      this.players = new Array<models.Player>();
      changes._records.forEach(element => {
        console.log("Add " + element.currentValue);
        this.players.push(element.currentValue);
      });
      this.CalcTotalCR();
      this.CrLeft();
    }
  }

  //Form Groups
  encounterFormGroup: FormGroup;
  monsterForm: FormGroup;
  monsterFormArray: FormArray;

  //Encounter Variables
  difficulty: string = 'Moderate';
  difficulties: string[] = difficulties;
  numMonsters: number = 1;

  monsterTypes: string[] = crTypes
    .map((cr) => cr.types.map((type) => type.name))
    .flat()
    .filter((item, index, arr) => {
      if (arr.indexOf(item) === index) return item;
    });
  crTable = crTable;
  monsterACList: number[] = [];
  loadingMonsters: boolean = false;
  totalCr: number = 0;
  crLeft: number = 0;
  mcr: string = "";

  //Calculation Variables;
  groupXp: number = 0;
  xpMultiplier: number = 1;
  monsterXpTotal: number = 0;
  monsterXp: number = 0;

  monsterSearch: {
    numMonsters: number,
    cr: string,
    crList: string[];
    type: string,
    types: string[],
    ac: number,
    acList: number[],
    loading: boolean,
    crNum: number;
    canAdd: boolean;
    monsters: models.Monster[],
  }[] = [];

  _search = {numMonsters: 1, cr: "", crList: [], type: "", types: justTypes, ac: null, acList: acTable.map(x => x.ac).flat().filter((item, index, arr) => {
    if(arr.indexOf(item) === index){
      return item;
    }
  }).sort(), loading: false, crNum: null, canAdd: true, monsters: []};
  

  ngOnInit(): void {
    this.monsterForm = this._formBuilder.group({
      numMonsters: new FormControl([
        Validators.required,
        Validators.min(1)
      ]),
      cr: new FormControl(
        Validators.required
      ),
      type: new FormControl(),
      ac: new FormControl([
        Validators.min(0),
        Validators.max(30)
      ])
    });

    this.encounterFormGroup = this._formBuilder.group({
      difficulty: new FormControl(this.difficulty, [
        Validators.required
      ]),
      numMonsters: new FormControl([
        Validators.required,
        Validators.min(1)
      ]),
      monsters: new FormArray([
      ])
    });

    this.CalcTotalCR();

    this.monsterFormArray = this.encounterFormGroup.get('monsters') as FormArray;
    this.monsterFormArray.push(this.monsterForm);
    this._search.crList = crTable.filter(x => x.crNum <= this.crLeft).map(x => x.cr);
    this.monsterSearch.push(JSON.parse(JSON.stringify(this._search)));
  }

  UpdateForms(){
    if(this.numMonsters < 1) this.numMonsters = 1;
    while(this.numMonsters > this.monsterSearch.length){
      this._search.crList = crTable.filter(x => x.crNum <= this.crLeft).map(y => y.cr);
      this.monsterSearch.push(JSON.parse(JSON.stringify(this._search)));
      this.monsterFormArray.push(this._formBuilder.group({
        numMonsters: new FormControl([
          Validators.required,
          Validators.min(1)
        ]),
        cr: new FormControl(
          Validators.required
        ),
        type: new FormControl(),
        ac: new FormControl([
          Validators.min(0),
          Validators.max(30)
        ])
      }));
    }
    while(this.numMonsters < this.monsterSearch.length){
      this.monsterSearch.splice(this.monsterSearch.length-1,1)
      this.monsterFormArray.removeAt(this.monsterFormArray.length-1);
    }
  }

  RemoveMonsterForm(i: number){
    this.monsterSearch.splice(i,1);
    this.monsterFormArray.removeAt(i);
    this.numMonsters--;
    this.CrLeft();
  }

  AddMonsterForm(){
    this.numMonsters++;
    this.UpdateForms();
  }

  ChangeMonsterCount(monsterIndex:number, change:number){
    this.monsterSearch[monsterIndex].numMonsters += change;
    this.CrLeft();
    this.monsterSearch[monsterIndex].canAdd = this.crLeft >= this.monsterSearch[monsterIndex].crNum

  }

  CrLeft():number{
    if(this.monsterSearch.length > 0){
      var allMonstersCR = this.monsterSearch.map((search) => {
        if(search.cr == "" || search.cr === undefined) return 0;
        return crTable.find(y => y.cr == search.cr).crNum * search.numMonsters;
      }).reduce((a,b) => a+b);
      this.crLeft = this.totalCr - allMonstersCR;
    }
    else{
      this.crLeft = this.totalCr;
    }

    this.monsterSearch.forEach(search => {
      search.canAdd = search.crNum <= this.crLeft;
      search.crList = this.crTable.filter(x => (x.crNum * search.numMonsters) <= this.crLeft + (search.crNum * search.numMonsters)).map( y=> y.cr);
    });

    return this.crLeft;
  }

  CalcTotalCR(){
    var encounterDifficulty = this.difficulties.indexOf(this.difficulty);
    this.groupXp = 0;
    this.xpMultiplier = 0;
    this.monsterXpTotal = 0;
    this.monsterXp = 0;

    //Calculate Group XP

    this.players.forEach(player => {
      this.groupXp += xpTable[player.level-1][encounterDifficulty];
    });

    if(this.numMonsters == 1){
      this.xpMultiplier = 1;
    }
    else if(this.numMonsters == 2){
      this.xpMultiplier = 1.5;
    }
    else if(this.numMonsters < 7){
      this.xpMultiplier = 2;
    }
    else if(this.numMonsters < 11){
      this.xpMultiplier = 2.5;
    }
    else if(this.numMonsters < 15){
      this.xpMultiplier = 3;
    }
    else{
      this.xpMultiplier = 4;
    }

    if(this.players.length < 3) this.xpMultiplier += .5;

    this.monsterXpTotal = this.groupXp / this.xpMultiplier;
    var remainingXp = this.monsterXpTotal;
    this.totalCr = 0;
    if(this.players.length > 0){
      do{
        var indexFound = crTable.findIndex(x => x.xp > this.monsterXpTotal)-1;
        remainingXp -= crTable[indexFound].xp;
        this.totalCr += crTable[indexFound].crNum;
      } while (remainingXp > crTable[0].crNum);
    }
    else{
      this.totalCr = 0;
    }

    this.CrLeft();

  }

  GetMonsters(monsterIndex: number){
    this.monsterSearch[monsterIndex].loading = true;
    var monster = new models.Monster();
    this.monsterSearch[monsterIndex].monsters = [];
    var cr:string = this.monsterSearch[monsterIndex].cr;
    var ac: string = this.monsterSearch[monsterIndex].ac === undefined || this.monsterSearch[monsterIndex].ac === null ? "":this.monsterSearch[monsterIndex].ac.toString();
    if(this.monsterSearch[monsterIndex].type === undefined) this.monsterSearch[monsterIndex].type = "";
    this.monsterService.Search(cr, this.monsterSearch[monsterIndex].type.toLowerCase(), ac).subscribe(res => {
      if(res.count > 0){
        var number = Math.floor(Math.random() * res.results.length);
        monster = res.results[number] as models.Monster;
        for(var i=0;i<this.monsterSearch[monsterIndex].numMonsters;i++ ){
          this.monsterSearch[monsterIndex].monsters.push(monster);
        }
      }
    });
    setTimeout(() => {
    this.monsterSearch[monsterIndex].loading = false;
    }, 500);
  }

  UpdateEncounter(monsterIndex: number){
    if(this.monsterSearch[monsterIndex].cr === undefined || this.monsterSearch[monsterIndex].cr == ""){
      this.monsterSearch[monsterIndex].crNum = 0;
      this.monsterSearch[monsterIndex].types = justTypes;
      this.monsterSearch[monsterIndex].acList = acTable.map( x=> x.ac).flat().filter((item, index, arr) => {
        if(arr.indexOf(item) == index){
          return item;
        }
      }).sort();
    }
    else{
      this.monsterSearch[monsterIndex].types = crTypes.find(x => x.cr == this.monsterSearch[monsterIndex].cr).types.map(x => x.name);
      this.monsterSearch[monsterIndex].crNum = crTable.find(x => x.cr == this.monsterSearch[monsterIndex].cr).crNum;
      if(this.monsterSearch[monsterIndex].type === undefined || this.monsterSearch[monsterIndex].type == ""){
        this.monsterSearch[monsterIndex].acList = crTypes.find(x => x.cr == this.monsterSearch[monsterIndex].cr).types.map(y => y.ac).flat().filter((item, index, arr) => {
          if(arr.indexOf(item) === index) return item;
        }).sort();
      }
      else{
        this.monsterSearch[monsterIndex].acList = crTypes.find(x => x.cr == this.monsterSearch[monsterIndex].cr).types.find(y => y.name ==  this.monsterSearch[monsterIndex].type).ac.sort();
      }
    }

    this.CrLeft();
  }

  GenerateCombat(){
    var combatants = new Array<models.Combatant>();
    this.monsterSearch.map(x => x.monsters).flat().forEach(monster => {
      var init = Math.floor(Math.random()*19)+1+Math.floor((monster.dexterity-10)/2);
      combatants.push({name: monster.name, init: init, hit_points: monster.hit_points, monster: monster });
    });

    this.players.forEach(player => {combatants.push({name: player.name, init: player.init, hit_points: player.hit_points})});

    combatants.sort((a,b) => b.init - a.init);

    this.generateCombat.emit(combatants);
  }
}
