import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { movies, Movie } from './models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  fetchMovies() {
    return this.http.get<Movie[]>('http://localhost:3000/movies');
  }

  fetchMovie(id: number) {
    return this.http.get<Movie>(`http://localhost:3000/movies/${id}`)
  }

  //fetching from local model:
  // getMovies() {
  //   return of(movies);
  // }

  // getMovie(id: number) {
  //   return of(movies.find(movie => +movie.id === +id));
  // }
}
