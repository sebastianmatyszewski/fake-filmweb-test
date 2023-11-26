import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieEntity } from 'src/app/Model/movie';
import { DataService } from 'src/app/Service/data.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit{
  movie!: MovieEntity;
  constructor(private dataService: DataService, private router:ActivatedRoute){

  }
  ngOnInit(): void {
  }

  loadMovie(){
    
  }
}
