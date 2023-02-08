import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ScrollToBottomDirective } from 'src/app/shared/directives/scroll-to-bottom.directive';
import { GaleryService, Image } from 'src/app/shared/services/galery.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  viewProviders:[ ScrollToBottomDirective ]
})
export class SearchComponent implements OnInit, OnDestroy {
  constructor(private galeryService: GaleryService ,private activatedRoute: ActivatedRoute){}

  searchQuery!: string;
  searchedImages: Image[] = [];
  $searchSubscription!: Subscription;
  hasImages: boolean = true;

  actualPage = 1;

  ngOnInit(): void {
    this.searchQuery = this.activatedRoute.snapshot.params['query'];
    this.searchImages(this.searchQuery);
  }

  searchImages(query: string) {
    this.$searchSubscription = this.galeryService.searchImages(query, this.actualPage)
    .subscribe((data)=> {
      if(data.length == 0){
        this.hasImages = false;
      }else {
        this.searchedImages = data;
        this.hasImages = true;
      }
    });
  }

  scrollCheck() {
    this.actualPage++;
    this.galeryService.searchImages(this.searchQuery , this.actualPage).subscribe((data) => {
      data.map((items: Image)=>{
        this.searchedImages.push(items);
      })
    })
  }

  onLoad(index: number) {
    this.searchedImages[index].is_loaded = true;
  }

  ngOnDestroy(): void {
    if(this.$searchSubscription){
      this.$searchSubscription.unsubscribe();
    }
  }
}
