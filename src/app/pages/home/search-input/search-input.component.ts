import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ControlContainer, FormControl, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  viewProviders: [
    {
        provide: ControlContainer,
        useExisting: FormGroupDirective
    }
  ]
})
export class SearchInputComponent implements OnInit {
  @Output() 
  isAtBottom: EventEmitter<void> = new EventEmitter();

  constructor(private formGroup: FormGroupDirective) {}
  
  control!: FormControl;

  @Input()
  name!: string;

  @Input()
  label!: string;

  ngOnInit(): void {
    this.control = this.formGroup.form.get(this.name) as FormControl;
  }

  onEnterKeyPress() {
    this.isAtBottom.emit();
  }

}
