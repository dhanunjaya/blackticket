import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Movie } from '../model/movie';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  endpoint_url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // http://localhost:3000/location/<locationId>/movies
  getMoviesList(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(this.endpoint_url + '/movies');
  }

  // http://localhost:3000/location/<locationId>/movies/<movieId>
  getMovieById(movie_id: string): Observable<Movie> {
    const url = `${this.endpoint_url}/movies/${movie_id}`;
    // console.log('services:', url);
    // this.http.get<Movie>(url).subscribe(data => console.log(data));
    return this.http.get<Movie>(url);
  }
}
