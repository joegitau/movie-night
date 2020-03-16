import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Movie } from '../models/movie.model';
import { MovieService } from '../movie.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MovieFormComponent } from '../movie-form/movie-form.component';
@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.scss']
})
export class CreateMovieComponent implements OnInit {
  @ViewChild('movieForm') movieForm: MovieFormComponent;

  movie: Movie;

  constructor(private movieService: MovieService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }

  createMovie() {

      if (this.movie) {
        this.movieService.addMovie(this.movie).subscribe(
          () => {
            this.movieForm.reset();
            this.toastr.success('Movie successfully added!', 'Create Movie');

            this.router.navigate(['/']);
          },
          error => {
            this.toastr.error('Movie not created!', 'Create Movie')
          }
        );
      }

    // this.router.navigate(['/']);
  }
}
