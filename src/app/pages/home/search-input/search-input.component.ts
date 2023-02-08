import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ControlContainer, FormControl, FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { CacheService } from 'src/app/shared/services/cache.service';

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

  $searchObservable = new Subject();

  constructor(private formGroup: FormGroupDirective, private router: Router, private cacheService: CacheService) {}
  
  control!: FormControl;

  recentSearches!: Array<string>;

  @Input()
  name!: string;

  @Input()
  label!: string;

  ngOnInit(): void {
    this.control = this.formGroup.form.get(this.name) as FormControl;
    this.getRecentQueries();
  }

  onEnterKeyPress() {
    this.isAtBottom.emit();
  }

  getRecentQueries() {
    let cachedQueries: any = localStorage.getItem('searchItems');
    const parsedData = JSON.parse(cachedQueries);
    this.recentSearches = parsedData;
  }

  searchByTag(tag: string) {
    this.router.navigate(['/photos/'+ tag]);
  }

}
