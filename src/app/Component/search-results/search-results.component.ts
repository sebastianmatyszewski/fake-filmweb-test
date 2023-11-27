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
    
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.searchString = params['searchString'];
      this.sendSearchRequest(this.searchString);
    });
  }

  sendSearchRequest(searchParam: string, page: any = 1) {
    console.log(searchParam)
    if(searchParam !== '' && searchParam !== undefined){
      this.subscriptions.push(
        this.dataService.getSearchMovie(searchParam, page).subscribe( res => {
          this.searchMovie = this.dataService.modifyData(res) as Movie;
          console.log(this.searchMovie)
        }, err => {
          console.log(err)
        })
      )
    }
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
