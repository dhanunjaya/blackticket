import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './ui/movie-list/movie-list.component';
import { MovieSummaryComponent } from './ui/movie-summary/movie-summary.component';
import { MovieDetailsComponent } from './ui/movie-details/movie-details.component';

const routes: Routes = [
  {
    path: 'movies',
    component: MovieListComponent
  },
  {
    path: 'movies/:movie_id',
    component: MovieDetailsComponent
  },
  {
    path: '',
    redirectTo: '/movies',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
export const routerComponents = [
  MovieListComponent,
  MovieSummaryComponent,
  MovieDetailsComponent
];
