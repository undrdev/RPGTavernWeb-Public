import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  Input,
  DoCheck,
  ChangeDetectorRef,
} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import * as models from '../../models/models';
import * as animations from '../../animations';
import { KeyValueDiffers } from '@angular/core';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss'],
  animations: [
    animations.slideInAnimation,
    animations.fadeInAnimation,
    animations.fadeAnimation,
    animations.rowInOutAnimation,
    animations.pageFadeAnimation
  ]
})

export class PlayerListComponent implements OnInit, DoCheck {

  constructor(private differs: KeyValueDiffers, private cd: ChangeDetectorRef) {
    this.differ = differs.find({}).create();
  }
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1
      },
      800: {
        items: 2
      },
      1200: {
        items: 3
      },
    },
    nav: false,
    autoHeight: true
  };

  @Input() players: models.Player[];
  @Input() layout;
  @Output() removePlayer = new EventEmitter<models.Player>();
  differ: any;
  ngOnInit(): void {
  }

  ngDoCheck(): void {
    const changes = this.differ.diff(this.players);
    console.log(changes);
    if (changes) {
      this.players = new Array<models.Player>();
      changes._records.forEach(element => {
        console.log('Add ' + element.currentValue);
        this.players.push(element.currentValue);
      });
    }
  }

  RemovePlayer(player: models.Player) {
    this.removePlayer.emit(player);
  }
}
