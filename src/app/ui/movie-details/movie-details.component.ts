import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Movie } from '../../model/movie';
import { MovieService } from '../../services/movie.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie: Movie;

  private video: {
    safeUrl: any;
  };

  constructor(private route: ActivatedRoute, private movieService: MovieService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const movie_id = params.get('movie_id');
      this.movieService.getMovieById(movie_id)
        .subscribe((movie) => {
          this.movie = movie;
          this.video.safeUrl = this.getSantizeUrl(this.movie.trailer);
        });
    });
  }

  public getSantizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

}
