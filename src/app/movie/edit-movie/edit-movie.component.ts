import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../models/movie.model';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieFormComponent } from '../movie-form/movie-form.component';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.scss']
})
export class EditMovieComponent implements OnInit {
  @ViewChild('movieForm') movieForm: MovieFormComponent;
  movie: Movie = {
    name: "",
    image: "",
    genre: "",
    releaseYear: ""
  };;

  constructor(private movieService: MovieService, private toastr: ToastrService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id');
      this.movieService.fetchMovie(id).subscribe( movie => {
        this.movie = movie;
        this.movieForm.movieForm.setValue(movie);
      });
    });
  }

  editMovie() {

    if (this.movie) {
      this.movieService.updateMovie(this.movie).subscribe(
        () => {
          this.movieForm.reset();
          this.toastr.success('Movie successfully updated!', 'Update Movie');

          this.router.navigate(['/']);
        },
        error => {
          this.toastr.error('Movie not updated!', 'Update Movie')
        }
      );
    }


  console.log(this.movie)
  // this.router.navigate(['/']);
}
}
