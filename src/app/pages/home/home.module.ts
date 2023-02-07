import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchInputModule } from './search-input/search-input.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    SharedModule,
    SearchInputModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
