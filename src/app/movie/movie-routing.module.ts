import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { CreateMovieComponent } from './create-movie/create-movie.component';

const routes: Routes = [
  {
    path: '',
    component: MovieListComponent
  },
  {
    path: 'edit/:id',
    component: EditMovieComponent,
    pathMatch: 'full'
  },
  {
    path: 'create',
    component: CreateMovieComponent
  },
  {
    path: ':id',
    component: MovieDetailComponent
  }
 ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
