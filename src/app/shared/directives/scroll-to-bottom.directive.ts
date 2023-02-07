import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { GaleryService } from '../services/galery.service';

@Directive({
  selector: '[appScrollToBottom]'
})
export class ScrollToBottomDirective {
  @Output() isAtBottom: EventEmitter<any> = new EventEmitter();

  constructor(private el: ElementRef, private galeryService: GaleryService) { }

  @HostListener('window:scroll', ['$event'])
  onScrollEvent() {
    let element = this.el.nativeElement;
    
    if(window.pageYOffset + window.innerHeight >= element.scrollHeight){
      this.isAtBottom.emit();
    }
  }

}
