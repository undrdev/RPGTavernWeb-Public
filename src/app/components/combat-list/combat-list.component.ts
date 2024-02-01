import { ChangeDetectorRef, SimpleChanges } from '@angular/core';
import { Component, DoCheck, Input, KeyValueDiffers, OnChanges, OnInit } from '@angular/core';
import * as animations from '../../animations';
import * as models from '../../models/models';

@Component({
  selector: 'app-combat-list',
  templateUrl: './combat-list.component.html',
  styleUrls: ['./combat-list.component.scss'],
  animations: [
    animations.slideInAnimation,
    animations.fadeInAnimation,
    animations.fadeAnimation,
    animations.rowInOutAnimation,
    animations.pageFadeAnimation
  ]
})
export class CombatListComponent implements OnInit, OnChanges, DoCheck {

  constructor(private differs: KeyValueDiffers, private _changeDetector: ChangeDetectorRef) { 
    this.differ = differs.find({}).create();
  }

  @Input() combatants: Array<models.Combatant>;
  @Input() layout: string;
  selectedMonster: models.Monster;
  showMonster: boolean = false;
  showCard: boolean = false;
  skillString: string ="";
  removeWhenDead: boolean = true;
  noMonstersFound: boolean = false;
  differ: any;

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges):void{
    if(changes.layout){
      this.layout = changes.layout.currentValue;
    }
    if(changes.combatants){
      this.combatants = changes.combatants.currentValue;
    }
  }
  ngDoCheck(): void {
    var changes = this.differ.diff(this.combatants);
    console.log(changes);
		if(changes) {
      this.combatants = new Array<models.Combatant>();
      changes._records.forEach(element => {
        console.log("Add " + element.currentValue);
        this.combatants.push(element.currentValue);
      });
    }
  }

  NextCombatant(){
    do{
    var combatant = this.combatants.shift();
    this._changeDetector.detectChanges();
    this.combatants.push(combatant);
    this._changeDetector.detectChanges();
    } while (this.combatants[0].hit_points <= 0);
  }

  CheckHp(combatant: models.Combatant){
    if(combatant.monster && combatant.hit_points <= 0 && this.removeWhenDead){
      this.combatants.splice(this.combatants.indexOf(combatant),1);
    }
  }

  CheckCombatants(){
    if(this.removeWhenDead){
      this.combatants.forEach(combatant => this.CheckHp(combatant));
    }
  }

  SelectMonster(monster: models.Monster){
    var skillList = [];
    this.selectedMonster = monster;
    this.showMonster = false;

    if(this.selectedMonster.skills.acrobatics > 0) skillList.push("Acrobatics +" + this.selectedMonster.skills.acrobatics);
    if(this.selectedMonster.skills.animal_handling > 0 ) skillList.push("Animal Handling +" + this.selectedMonster.skills.animal_handling);
    if(this.selectedMonster.skills.arcana > 0 ) skillList.push("Arcana +" + this.selectedMonster.skills.arcana);
    if(this.selectedMonster.skills.athletics > 0 ) skillList.push("Athletics +" + this.selectedMonster.skills.athletics);
    if(this.selectedMonster.skills.deception > 0 ) skillList.push("Deception +" + this.selectedMonster.skills.deception);
    if(this.selectedMonster.skills.history > 0 ) skillList.push("History +" + this.selectedMonster.skills.history);
    if(this.selectedMonster.skills.insight > 0 ) skillList.push("Insight +" + this.selectedMonster.skills.insight);
    if(this.selectedMonster.skills.intimidation > 0 ) skillList.push("Intimidation +" + this.selectedMonster.skills.intimidation);
    if(this.selectedMonster.skills.investigation > 0 ) skillList.push("Investigation +" + this.selectedMonster.skills.investigation);
    if(this.selectedMonster.skills.medicine > 0 ) skillList.push("Medicine +" + this.selectedMonster.skills.medicine);
    if(this.selectedMonster.skills.nature > 0 ) skillList.push("Nature +" + this.selectedMonster.skills.nature);
    if(this.selectedMonster.skills.perception > 0 ) skillList.push("Perception +" + this.selectedMonster.skills.perception);
    if(this.selectedMonster.skills.performance > 0 ) skillList.push("Performance +" + this.selectedMonster.skills.performance);
    if(this.selectedMonster.skills.persuasion > 0 ) skillList.push("Persuasion +" + this.selectedMonster.skills.persuasion);
    if(this.selectedMonster.skills.religion > 0 ) skillList.push("Religion +" + this.selectedMonster.skills.religion);
    if(this.selectedMonster.skills.slight_of_hand > 0 ) skillList.push("Slight of Hand +" + this.selectedMonster.skills.slight_of_hand);
    if(this.selectedMonster.skills.stealth > 0 ) skillList.push("Stealth +" + this.selectedMonster.skills.stealth);
    if(this.selectedMonster.skills.survival > 0 ) skillList.push("Survival +" + this.selectedMonster.skills.survival);

    this.skillString = skillList.join(",\n");

    this.showMonster = true;
  }

  ClearMonster(input: boolean){
    this.selectedMonster = null;
    this.skillString = "";
    this.showMonster = false;
  }

  ShowHideFinished(){
    this.showCard = this.showMonster;
  }

}
