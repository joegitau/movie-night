import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Movie } from '../models/movie.model';

enum Mode {
  CREATE, EDIT
}
@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent implements OnInit {
  movieForm: FormGroup;
  movieError: any;

  @Input() currentMode: Mode = Mode.CREATE;
  @Input() movie: Movie = {
    name: "",
    image: "",
    genre: "",
    releaseYear: ""
  };

  get isEditMode(): boolean {
    return this.currentMode === Mode.EDIT;
  }

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
      releaseYear: ['', Validators.required],
      id: ''
    });

    this.movieForm.setValue(this.movie);
  }

  createMovie() {
    if (!this.isEditMode) {
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
    } else {
    }

    console.log(this.movieForm.value)
    // this.router.navigate(['/']);
  }

  reset() {
    this.movieForm.reset();
  }

}
