import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CreditsResponse, MovieDetails, ResponseTMDB } from '../interfaces/Responses';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  URL    = environment.tmdbUrl;
  apiKey = environment.apiKey;

  constructor( private http: HttpClient ) { }

  private executeQuery<T>( query: string, extra: string = '' ) {

    //console.log(this.URL);
    query = this.URL + query;
    query += `?api_key=${ this.apiKey }&language=es&include_image_language=es`;
    query += extra;

    return this.http.get<T>( query );

  }

  getPopularMovies() {
    return this.executeQuery<ResponseTMDB>(`/movie/popular`);
  }

  getMovieDetails( id: string ) {
    return this.executeQuery<MovieDetails>(`/movie/${ id }`);
  }

  searchMovies( text: string ) {
    return this.executeQuery(`/search/movie`, `&query=${ text }`);
  }

  getMovieActors( id: string ) {
    return this.executeQuery<CreditsResponse>(`/movie/${ id }/credits`);
  }

}
