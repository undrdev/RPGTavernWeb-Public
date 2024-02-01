import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import * as animations from '../../animations';
import * as models from '../../models/models';

@Component({
  selector: 'app-monster-card',
  templateUrl: './monster-card.component.html',
  styleUrls: ['./monster-card.component.scss'],
  animations: [
    animations.slideInAnimation,
    animations.fadeInAnimation,
    animations.fadeAnimation,
    animations.rowInOutAnimation,
    animations.pageFadeAnimation
  ]
})
export class MonsterCardComponent implements OnInit {

  constructor() { }
  @Input() selectedMonster: models.Monster;
  @Output() Close = new EventEmitter();
  @Input() skillString: string;
  ngOnInit(): void {
  }

  ClearMonster() {
    this.Close.emit();
  }
}
