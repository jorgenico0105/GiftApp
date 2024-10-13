import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazyimage',
  templateUrl: './lazyimage.component.html',

})
export class LazyimageComponent implements OnInit {

  @Input()
  public url!: string;
  public Loaded:boolean=false
  onLoad(){
    setTimeout(()=>{
      this.Loaded=true
    },1200)
  }
  ngOnInit(): void {
    if(!this.url)  throw new Error('Url neded');
  }
}
