import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MovieEntity } from 'src/app/Model/movie';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  @Input() movies: MovieEntity[] = [];
  @Input() carouselTitle: string = "";
  @Output() spellTekst: EventEmitter<string> = new EventEmitter<string>()
  responsiveOptions;

  constructor(){
    this.responsiveOptions = [
      {
        breakpoint: '2500px',
        numVisible: 5,
        numScroll: 5
      },
      {
        breakpoint: '1800px',
        numVisible: 4,
        numScroll: 4
      },
      {
          breakpoint: '1324px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '360px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }
}
