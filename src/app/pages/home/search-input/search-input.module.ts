import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchInputComponent } from './search-input.component';

@NgModule({
  declarations: [
    SearchInputComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    SearchInputComponent
  ]
})
export class SearchInputModule { }
