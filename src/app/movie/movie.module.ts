import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieComponent } from './movie/movie.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { CreateMovieComponent } from './create-movie/create-movie.component';

@NgModule({
  declarations: [MovieListComponent, MovieDetailComponent, MovieComponent, MovieFormComponent, EditMovieComponent, CreateMovieComponent],
  imports: [
    CommonModule,
    MovieRoutingModule,
    ReactiveFormsModule
  ]
})
export class MovieModule { }
