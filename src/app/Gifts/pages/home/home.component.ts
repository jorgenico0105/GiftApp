import { Component } from '@angular/core';
import { GiftsService } from '../../services/gifts-service.service';
import { Gift } from '../../interfaces/gifts.interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

})
export class HomeComponent {
  constructor(private giftService:GiftsService){
  }
  get gifts():Gift[]{
    return this.giftService.giftsList
  }
}
