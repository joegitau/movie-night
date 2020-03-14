import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.scss']
})
export class CreateMovieComponent implements OnInit {
  movieForm: FormGroup;

  constructor(private fb: FormBuilder, private movieService: MovieService, private router: Router) { }

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
      this.movieService.addMovie(this.movieForm.value).subscribe(() => {
        this.movieForm.reset();
        this.router.navigate(['/']);
      });
    }
    this.router.navigate(['/']);
  }

}
