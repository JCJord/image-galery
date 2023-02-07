import { NgModule } from '@angular/core';
import { HomeModule } from './home/home.module';
import { SharedModule } from '../shared/shared.module';
import { SearchModule } from './search/search.module';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    SharedModule,
    HomeModule,
    SearchModule,
    SharedModule
  ],
  exports: [
    SearchModule,
    HomeModule
  ],
  declarations: [
  
    NotFoundComponent
  ]
})
export class PagesModule { }
