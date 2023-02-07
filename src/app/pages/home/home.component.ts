import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, Subscription } from 'rxjs';
import { ScrollToBottomDirective } from 'src/app/shared/directives/scroll-to-bottom.directive';
import { GaleryService, Image } from 'src/app/shared/services/galery.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  viewProviders:[ ScrollToBottomDirective ]
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(private galeryService: GaleryService, private router: Router) {}

  private $imageSubscription!: Subscription;
  private $scrollSubscription!: Subscription;
  
  imageGalery!: Image[];

  isLoading = true;
  actualPage = 1;

  searchForm = new FormGroup({
    search: new FormControl({ value: undefined, disabled: false }),
  });

  ngOnInit() {
    this.getImages();
  }

  getImages() {
    const pageNumber = 1;
    this.$imageSubscription = this.galeryService.getImages(pageNumber).subscribe((images: Image[]) => {
      this.imageGalery = images;
      console.log(this.imageGalery)
    });
  }

  scrollCheck() {
    this.actualPage++;

    this.$scrollSubscription = this.galeryService.getImages(this.actualPage).subscribe((data) => {
      data.map((items)=>{
        this.imageGalery.push(items)
      })
    })
  }

  inputSearch() {
    const inputQuery: string | null | undefined = this.searchForm.get('search')!.value;

    if(inputQuery == undefined || inputQuery == "") {
      return
    } else {
      this.router.navigate(['/photos/', inputQuery])
    }
  }
  
  onLoad(index: number) {
    this.imageGalery[index].is_loaded = true;
  }

  ngOnDestroy() {
    this.$imageSubscription.unsubscribe();
    //this.$scrollSubscription.unsubscribe();
    // this.$searchSubcription.unsubscribe();
  }

}
