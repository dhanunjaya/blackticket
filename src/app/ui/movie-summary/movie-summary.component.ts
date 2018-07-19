import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../model/movie';

@Component({
  selector: 'app-movie-summary',
  templateUrl: './movie-summary.component.html',
  styleUrls: ['./movie-summary.component.css']
})
export class MovieSummaryComponent implements OnInit {

  @Input()
  movie: Movie;

  @Output()
  movieClick: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public movieClicked() {
    this.movieClick.emit(this.movie.id);
  }

}
