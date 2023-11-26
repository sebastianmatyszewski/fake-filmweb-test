import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {CarouselModule} from 'primeng/carousel';
import { CarouselComponent } from './Component/carousel/carousel.component';
import { TruncatePipe } from './Pipes/truncat.pipe';
import { SkeletonModule } from 'primeng/skeleton';
import { MovieDetailsComponent } from './Component/movie-details/movie-details.component';
import { SearchBoxComponent } from './Component/search-box/search-box.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchResultsComponent } from './Component/search-results/search-results.component';
import { PaginatorModule } from 'primeng/paginator';
import { MovieCardComponent } from './Component/movie-card/movie-card.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CarouselComponent,
    TruncatePipe,
    MovieDetailsComponent,
    SearchBoxComponent,
    SearchResultsComponent,
    MovieCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    CarouselModule,
    SkeletonModule,
    FormsModule,
    ReactiveFormsModule,
    PaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
