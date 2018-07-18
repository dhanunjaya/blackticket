import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../model/movie';
import { Observable } from '../../../node_modules/rxjs';


@Injectable({
  providedIn: 'root'
})

export class MovieService {

  endpoint_url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // http://localhost:3000/location/<locationId>/movies
  getMoviesList(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.endpoint_url + '/movies');
  }

  // http://localhost:3000/location/<locationId>/movies/<movieId>
  getMovieById(movie_id: number): Observable<Movie> {
    const url = `${this.endpoint_url}/movies/${movie_id}`;
    return this.http.get<Movie>('http://localhost:3000/movies/2');
  }
}
