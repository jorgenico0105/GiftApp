import { Component, Input } from '@angular/core';
import { Gift } from '../../interfaces/gifts.interfaces';


@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',

})
export class CardListComponent {
  @Input()
  public gifs:Gift[]=[]

}
