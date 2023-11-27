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
  movieId: string | null = null;
  movie!: MovieEntity;
  constructor(private dataService: DataService, private router:ActivatedRoute){
    this.movieId = this.router.snapshot.paramMap.get("id");
  }
  ngOnInit(): void {
    this.loadMovie();
  }

  loadMovie(){
    if(this.movieId){
      this.dataService.getMovie(this.movieId).subscribe(movie => {
        this.movie = this.dataService.modifyData(movie) as MovieEntity;
        console.log(movie)
      })
    }
  }
}
