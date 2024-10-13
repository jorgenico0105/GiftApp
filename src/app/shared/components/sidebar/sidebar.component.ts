import { Component } from '@angular/core';
import { GiftsService } from '../../../Gifts/services/gifts-service.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private giftsService:GiftsService){
  }
  get tags(){
    return this.giftsService._tagsHistory
  }
  searchGif(gift:string):void{
    this.giftsService.searchTag(gift)
  }
}
