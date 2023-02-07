import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ScrollToBottomDirective } from './directives/scroll-to-bottom.directive';


@NgModule({
  declarations: [
    ScrollToBottomDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    ScrollToBottomDirective
  ]
})
export class SharedModule { }
