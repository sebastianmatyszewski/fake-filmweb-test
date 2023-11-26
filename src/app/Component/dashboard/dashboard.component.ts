import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/Model/movie';
import { DataService } from 'src/app/Service/data.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy{

  latestMovie: any;
  popularMovies !: Movie;
  nowPlayingMovies !: Movie; 
  topRatedMovies !: Movie; 
  upcomingMovies !: Movie; 
  trendingMovies !: Movie; 
  originalsMovies !: Movie; 
  subscriptions: Subscription[] = [];
  globalSearch: string = "";
  
  constructor(private dataServie: DataService, private router: Router){}

  getPopularMovies(){
    this.subscriptions.push(
      this.dataServie.getPopularMovie().subscribe( res => {
        this.popularMovies = this.modifyData(res);
        console.log(this.popularMovies)
      }, err => {
        console.log(err)
      })
    )
  }

  getNowPlayingMovies(){
    this.subscriptions.push(
      this.dataServie.getNowPlayingMovie().subscribe( res => {
        this.nowPlayingMovies = this.modifyData(res);
        console.log(this.nowPlayingMovies)
      }, err => {
        console.log(err)
      })
    )
  }

  getTopRatedMovies(){
    this.subscriptions.push(
      this.dataServie.getTopRatedMovie().subscribe( res => {
        this.topRatedMovies = this.modifyData(res);
        console.log(this.topRatedMovies)
      }, err => {
        console.log(err)
      })
    )
  }

  getUpcomingMovies(){
    this.subscriptions.push(
      this.dataServie.getUpcomingMovie().subscribe( res => {
        this.upcomingMovies = this.modifyData(res);
        console.log(this.upcomingMovies)
      }, err => {
        console.log(err)
      })
    )
  }

  getTrendingMovies(){
    this.subscriptions.push(
      this.dataServie.getTrendingMovie().subscribe( res => {
        this.trendingMovies = this.modifyData(res);
        console.log(this.trendingMovies)
      }, err => {
        console.log(err)
      })
    )
  }

  getOriginalsMovies(){
    this.subscriptions.push(
      this.dataServie.getOriginalsMovie().subscribe( res => {
        this.originalsMovies = this.modifyData(res);
        console.log(this.originalsMovies)
      }, err => {
        console.log(err)
      })
    )
  }

  ngOnInit(): void {
    // this.getLatestMovie();
    this.getPopularMovies();
    this.getNowPlayingMovies();
    this.getTopRatedMovies();
    this.getUpcomingMovies();
    this.getTrendingMovies();
    this.getOriginalsMovies();
  }
  modifyData(movies: Movie): Movie{
    if(movies.results) {
      movies.results.forEach(element => {
        element.backdrop_path = 'https://image.tmdb.org/t/p/original' + element.backdrop_path + '?api_key=' + environment.api_key;
        if(!element.title){
          element.title = element?.name;
        }
      });
    }

    return movies;
  }

  spellTekst(tekst: string){
    console.log(tekst)
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  onSearch(query: string) {
    if (query !== '') {
      this.router.navigate(['/search/' + query]);
    }
  }


}
