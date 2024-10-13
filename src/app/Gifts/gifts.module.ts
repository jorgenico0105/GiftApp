import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { ShearchComponent } from './components/shearch/shearch.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardShowComponent } from './components/card-show/card-show.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    ShearchComponent,
    CardListComponent,
    CardShowComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    HomeComponent
  ]
})
export class GiftsModule { }
