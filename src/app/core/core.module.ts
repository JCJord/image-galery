import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HeaderModule } from './components/header/header.module';

@NgModule({
  imports: [
    SharedModule,
    HeaderModule,
  ],
  exports: [
    HeaderModule,
  ]
})
export class CoreModule { }
