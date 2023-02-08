import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  public cachedQueries = new BehaviorSubject<Array<string>>([]);

  constructor() { }

  setQueries(query: string) {
    this.cachedQueries.subscribe((queryStorage)=>{
      queryStorage.push(query)
      localStorage.setItem('searchItems', JSON.stringify(queryStorage));
    })
  }
}
