import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ImageGalery } from 'src/app/entities/galery-image.type';

@Injectable({
  providedIn: 'root'
})
export class GaleryService {
  constructor(private http: HttpClient) { 
  }

  getImages(page: number): Observable<Image[]> {
    return this.http.get<ImageGalery[]>('https://api.unsplash.com/photos/?client_id=05XvQWHnSKPXOYEBR7kLnpSN9mGYo2Iskc5vj-zlsfs&per_page=10&page='+`${page}`)
    .pipe(map((data: ImageGalery[]) => {
      return data.map((item: ImageGalery) => {
        return {
          id: item.id,
          alt_description: item.alt_description,
          description: item.description,
          is_loaded: false,
          links: item.links,
          urls: item.urls,
          profile_image: item.profile_image,
          user: item.user
        }
      })
    }))
  }

  searchImages(query: string, page: number): Observable<any> { 
    return this.http.get<ImageGalery[]>('https://api.unsplash.com/search/photos?query='+`${query}`+'&client_id=05XvQWHnSKPXOYEBR7kLnpSN9mGYo2Iskc5vj-zlsfs&per_page=10&page='+`${page}`);
  }
}

export interface Image {
  id: string;
  alt_description: string;
  description: string;
  is_loaded: boolean | unknown;
  links: { download: string, download_location: string, html: string, self: string };
  urls: { raw: string; full: string; regular: string; small: string; small_s3: string; thumb: string }
  profile_image: string;
  user: { username: string, profile_image: {small: string} };
}