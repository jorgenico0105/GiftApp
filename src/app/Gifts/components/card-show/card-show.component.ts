import { Component, Input, OnInit } from '@angular/core';
import { Gift } from '../../interfaces/gifts.interfaces';

@Component({
  selector: 'app-card-show',
  templateUrl: './card-show.component.html',

})
export class CardShowComponent implements OnInit{
  @Input()
  public gif!:Gift;

  ngOnInit(): void {
    if (!this.gif) throw new Error('Gift is necessary');
  }
}
