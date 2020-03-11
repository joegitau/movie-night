import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { movies } from './models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  getMovies() {
    return of(movies);
  }
  constructor() { }
}
