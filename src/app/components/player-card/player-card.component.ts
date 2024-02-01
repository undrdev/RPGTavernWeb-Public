import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as animations from '../../animations';
import * as models from '../../models/models';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss'],
  animations: [
    animations.slideInAnimation,
    animations.fadeInAnimation,
    animations.fadeAnimation,
    animations.rowInOutAnimation,
    animations.pageFadeAnimation
  ]
})
export class PlayerCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() player :models.Player;
  @Output() RemovePlayer = new EventEmitter<models.Player>();

  Remove(player :models.Player){
    this.RemovePlayer.emit(player);
  }

}
