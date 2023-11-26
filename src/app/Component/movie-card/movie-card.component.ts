import { Component, Input } from '@angular/core';
import { MovieEntity } from 'src/app/Model/movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {
  @Input() movie!: MovieEntity;
}
