import { Component } from '@angular/core';
import { RouteReuseStrategy, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fake-filmweb';

  constructor(private router: Router){
  }
  
  onSearch(query: string) {
    console.log("ddd", query)
    if (query !== '') {
      this.router.navigate(['/search/' + query]);
    }
  }
  
}
