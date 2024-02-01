import { SimpleChanges } from '@angular/core';
import * as animations from '../../animations';
import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  Input
} from '@angular/core';
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormControl,
} from '@angular/forms';
import * as models from '../../models/models';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.scss'],
  animations: [
    animations.slideInAnimation,
    animations.fadeInAnimation,
    animations.fadeAnimation,
    animations.rowInOutAnimation,
    animations.pageFadeAnimation
  ]
})
export class PlayerFormComponent implements OnInit {
  constructor(
    private _formBuilder: FormBuilder,
  ) {}

  @Output() AddPlayer = new EventEmitter<models.Player>();
  @Input() layout;

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.layout = changes.layout.currentValue;
  }

  //Form Groups
  playerFormGroup: FormGroup;

  //Player Variables
  playerName: string;
  playerLevel: number;
  playerInit: number;
  playerHP: number;

  ngOnInit(): void {
    this.playerFormGroup = this._formBuilder.group({
      name: new FormControl('', [Validators.required]),
      level: new FormControl('', [
        Validators.required,
        Validators.max(30),
        Validators.min(1),
      ]),
      hp: new FormControl('', [Validators.required]),
      init: new FormControl('', [Validators.required]),
    });
  }

  SavePlayer() {
    if (this.playerFormGroup.valid) {
      var player = new models.Player(this.playerName, this.playerLevel, this.playerInit, this.playerHP)
      this.playerFormGroup.reset();
      Object.keys(this.playerFormGroup.controls).forEach(key => {
        this.playerFormGroup.get(key).setErrors(null);
      });
      this.AddPlayer.emit(player);
    }
  }
}
