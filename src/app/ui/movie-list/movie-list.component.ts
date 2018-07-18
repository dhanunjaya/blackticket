import { Component, OnInit } from '@angular/core';
import { Movie } from '../../model/movie';
import { Router } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: Movie[];

  constructor(private router: Router, private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getMoviesList()
      .subscribe(data => this.movies = data);
  }

  public userClickedOnMovie(movie_id): void {
    console.log('/movies/' + movie_id);
    this.router.navigateByUrl('/movies/' + movie_id);
  }

}
