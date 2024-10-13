import { Component, ElementRef, ViewChild } from '@angular/core';
import { GiftsService } from '../../services/gifts-service.service';

@Component({
  selector: 'app-shearch',
  templateUrl: './shearch.component.html',
})
export class ShearchComponent {

  @ViewChild('search')
  public tagInput!:ElementRef<HTMLInputElement>;
  constructor(private giftService: GiftsService){}
  searchTag(){
    const newTag=this.tagInput.nativeElement.value
    this.giftService.searchTag(newTag)
    this.tagInput.nativeElement.value=''
  }
}
