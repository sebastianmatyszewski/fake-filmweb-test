import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { MovieDetailsComponent } from './Component/movie-details/movie-details.component';
import { SearchResultsComponent } from './Component/search-results/search-results.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'search',
    component: SearchResultsComponent
  },
  {
    path: 'search/:searchString',
    component: SearchResultsComponent
  },
  {
    path: 'movie/:id',
    component: MovieDetailsComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
