import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/Model/movie';
import { DataService } from 'src/app/Service/data.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit, OnDestroy{

  subscriptions: Subscription[] = [];
  searchMovie : Movie | null = null; 
  searchString: string = "";

  constructor(private route: ActivatedRoute, private dataService: DataService) {
    this.route.params.subscribe(params => {
      this.searchString = params['searchString'];
    });
  }
  ngOnInit(): void {
    this.sendSearchRequest(this.searchString);
  }

  sendSearchRequest(searchParam: string, page: any = 1) {
    console.log(searchParam)
    if(searchParam !== '' && searchParam !== undefined){
      this.subscriptions.push(
        this.dataService.getSearchMovie(searchParam, page).subscribe( res => {
          this.searchMovie = this.modifyData(res);
          console.log(this.searchMovie)
        }, err => {
          console.log(err)
        })
      )

    }
  }

  onSearch(searchParam: string, page: any = 1) {
    console.log("page", page)
    if (searchParam !== '' && searchParam !== undefined) {
      this.searchString = searchParam;
      this.sendSearchRequest(searchParam, page);
    }
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

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
