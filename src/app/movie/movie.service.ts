import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Movie } from './models/movie.model';

@Injectable({ providedIn: 'root' })
export class MovieService {
  constructor(private http: HttpClient) {}

  fetchMovies() {
    return this.http
      .get<Movie[]>("http://localhost:3000/movies")
      .pipe(catchError(this.handleErrors));
  }

  fetchMovie(id: number) {
    return this.http
      .get<Movie>(`http://localhost:3000/movies/${id}`)
      .pipe(catchError(this.handleErrors));
  }

  addMovie(movie: Movie) {
    return this.http
      .post("http://localhost:3000/movies", movie)
      .pipe(catchError(this.handleErrors));
  }

  updateMovie(movie: Movie) {
    return this.http.put(`http://localhost:3000/movies/${movie.id}`, movie);
  }

  handleErrors(err: HttpErrorResponse) {
    return throwError(err);
  }
}
