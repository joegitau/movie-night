import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.scss']
})
export class CreateMovieComponent implements OnInit {
  movieForm: FormGroup;
  movieError: any;

  constructor(
    private fb: FormBuilder,
    private movieService: MovieService,
    private router: Router,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.movieForm = this.fb.group({
      name: ['', Validators.required],
      image: ['', Validators.required],
      genre: ['', Validators.required],
      releaseYear: ['', Validators.required]
    });
  }

  createMovie() {
    if (this.movieForm.valid) {
      this.movieService.addMovie(this.movieForm.value).subscribe(
        () => {
          this.movieForm.reset();
          this.toastr.success('Movie successfully added!', 'Create Movie');

          this.router.navigate(['/']);
        },
        error => {
          this.movieError = error;
          this.toastr.error('Movie not created!', 'Create Movie')
        }
      );
    }
    this.router.navigate(['/']);
  }

}
