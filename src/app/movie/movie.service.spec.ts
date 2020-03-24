import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { of } from 'rxjs';
import { find } from 'rxjs/operators';

import { MovieService } from './movie.service';
import { Movie } from './models/movie.model';

fdescribe('MovieService', () => {
  let service: MovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieService],
      imports: [HttpClientTestingModule]
    });

    service = TestBed.inject(MovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch all movies', done => {
    const mockMovies: Movie[] = [
      {id: 1, name: 'Gladiator', genre: 'Action', image: 'https://image', releaseYear: '2012'},
      {id: 2, name: 'Inception 2', genre: 'Thriller', image: 'https://image', releaseYear: '2020'}
    ];

    spyOn(service, 'fetchMovies').and.returnValue(of(mockMovies));

    service.fetchMovies().subscribe(movies => {
      expect(movies).toEqual(mockMovies);

      done();
    });
  });

  it('should fetch a movie by ID', done => {
    const mockMovies: Movie[] = [
      {id: 1, name: 'Gladiator', genre: 'Action', image: 'https://image', releaseYear: '2012'},
      {id: 2, name: 'Inception 2', genre: 'Thriller', image: 'https://image', releaseYear: '2020'}
    ];

    function fetchById(id: number) {
      return mockMovies.find(movie => movie.id === id);
    }

    spyOn(service, 'fetchMovie').and.returnValue(of(fetchById(1)));

    service.fetchMovie(1).subscribe(movie => {
      expect(movie).toEqual(fetchById(1));

      done();
    });
  });

  it('should add a new movie', done => {
    const mockMovie: Movie = {
      id: 1, name: 'Gladiator', genre: 'Action', image: 'https://image', releaseYear: '2012'
    };

    spyOn(service, 'addMovie').and.returnValue(of(mockMovie));

    service.addMovie(mockMovie).subscribe(() => {
      expect(mockMovie.name).toEqual('Gladiator');

      done();
    });

  });

});
