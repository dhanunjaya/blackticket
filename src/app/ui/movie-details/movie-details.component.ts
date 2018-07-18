import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Movie } from '../../model/movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie: Movie;

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    const movie_id = +this.route.snapshot.paramMap.get('movie_id');
    this.movieService.getMovieById(movie_id)
        .subscribe(movie => this.movie = movie);
    console.log('Movie details', this.movie);
  }

}
