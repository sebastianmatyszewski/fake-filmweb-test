import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable, retry } from 'rxjs'
import { Movie, MovieEntity } from '../Model/movie';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url: string = "https://api.themoviedb.org/3"; 

  constructor(private http: HttpClient) { }

  getLatestMovie(): Observable<any> {
    return this.http.get<any>(this.url + '/movie/latest?api_key=' + environment.api_key  + '&language=pl-PL')
  }

  getPopularMovie(): Observable<any> {
    return this.http.get<Movie>(this.url + '/movie/popular?api_key=' + environment.api_key  + '&language=pl-PL')
  }

  getNowPlayingMovie(): Observable<any> {
    return this.http.get<Movie>(this.url + '/movie/now_playing?api_key=' + environment.api_key  + '&language=pl-PL')
  }

  getTopRatedMovie(): Observable<any> {
    return this.http.get<Movie>(this.url + '/movie/top_rated?api_key=' + environment.api_key  + '&language=pl-PL')
  }

  getUpcomingMovie(): Observable<any> {
    return this.http.get<Movie>(this.url + '/movie/upcoming?api_key=' + environment.api_key  + '&language=pl-PL')
  }

  getTrendingMovie(): Observable<any> {
    return this.http.get<Movie[]>(this.url + '/trending/all/day?api_key=' + environment.api_key  + '&language=pl-PL')
  }

  getOriginalsMovie(): Observable<any> {
    return this.http.get<Movie>(this.url + '/discover/tv?api_key=' + environment.api_key  + '&language=pl-PL')
  }

  getSearchMovie(searchText: string, page: any = 1){
    return this.http.get<Movie>(this.url + '/search/movie?query=' + searchText + '&api_key=' + environment.api_key  + '&language=pl-PL'  + '&page='+ page)
  }

  // getMovie(id: string){
  //   return this.http.get<MovieEntity>(this.url + '/movie?=' + searchText + '&api_key=' + environment.api_key  + '&language=pl-PL'  + '&page='+ page)
  // }
}

