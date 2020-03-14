import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.scss']
})
export class CreateMovieComponent implements OnInit {
  movieForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.movieForm = this.fb.group({
      movieName: ['', Validators.required],
      poster: ['', Validators.required],
      genre: ['', Validators.required],
      releaseYear: ['', Validators.required]
    });
  }

  createMovie() {
    console.log(this.movieForm.value);
  }

}
