import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  movieTitle: BehaviorSubject<string>;
  movieGenre: BehaviorSubject<string>;

  constructor() {
    this.movieTitle = new BehaviorSubject('');
    this.movieGenre = new BehaviorSubject('');
   }
}
