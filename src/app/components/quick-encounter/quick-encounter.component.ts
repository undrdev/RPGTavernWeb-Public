import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MonsterService } from 'src/app/services/monster.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import * as models from '../../models/models';
import * as animations from '../../animations';
@Component({
  selector: 'app-home',
  templateUrl: './quick-encounter.component.html',
  styleUrls: ['./quick-encounter.component.scss'],
  animations: [
    animations.slideInAnimation,
    animations.fadeInAnimation,
    animations.fadeAnimation,
    animations.rowInOutAnimation,
    animations.pageFadeAnimation
  ]
})
export class QuickEncounterComponent implements OnInit {

  layout = 'handset';

  constructor(public monsterService: MonsterService, breakpointObserver: BreakpointObserver){
    breakpointObserver.observe([
      '(max-width: 800px)',
      '(min-width: 801px)',
      '(min-width: 1200px)'
    ]).subscribe(result => {
      if (result.breakpoints['(max-width: 800px)']){
        this.layout = 'handset';
        this.colCount = 1;
      }
      if (result.breakpoints['(min-width: 801px)']){
        this.layout = 'tablet';
        this.colCount = 2;
      }
      if (result.breakpoints['(min-width: 1200px)']){
        this.layout = 'full';
        this.colCount = 2;
      }
    });
  }
  colCount: number;
  players: models.Player[] = [
    new models.Player('ethan', 12, 12, 12),
    new models.Player('ashton', 20, 20, 120),
    new models.Player('Jaci', 10, 10, 10)
  ];

  // Combat Variables
  combatants = new Array<models.Combatant>();

  ngOnInit(){
  }

  AddPlayer(player: models.Player){
    this.players = [...this.players, player];
  }

  RemovePlayer(player: models.Player){
    const index = this.players.indexOf(player);
    if (index !== -1){
      this.players.splice(index, 1);
    }
    this.players = [...this.players];
  }

  GenerateCombat(combatants: Array<models.Combatant>){
    this.combatants = new Array<models.Combatant>();
    this.combatants = combatants;
  }
}
