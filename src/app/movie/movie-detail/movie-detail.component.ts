import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Movie } from '../models/movie.model';
import { MovieService } from '../movie.service';
import { NavbarService } from 'src/app/nav-bar/services/navbar.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit, OnDestroy {
  id: number;
  movie: Movie;
  movieSub$: Subscription;
  movieTitle;

  constructor(private movieService: MovieService, private route: ActivatedRoute, private navbarService: NavbarService) { }

  ngOnInit(): void {
    // this.id = +this.route.snapshot.paramMap.get('id');
    // this.movieSub$ = this.movieService.getMovie(this.id).subscribe(movie => {
    //   this.movie = movie;
    //   console.log(this.movie);
    // })

    this.route.paramMap.subscribe(params => {
      const id = +params.get('id');
      this.movieSub$ = this.movieService.getMovie(id).subscribe( movie => {
        this.movie = movie;
        this.navbarService.movieTitle.next(movie.name);
        this.navbarService.movieGenre.next(movie.genre);
      });
    });

  }

  ngOnDestroy(): void {
    this.movieSub$.unsubscribe();
  }
}
