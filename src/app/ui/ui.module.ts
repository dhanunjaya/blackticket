import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieSummaryComponent } from './movie-summary/movie-summary.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    MovieListComponent,
    MovieSummaryComponent,
    MovieDetailsComponent
  ],
  exports: [
    LayoutComponent,
    MovieListComponent
  ]
})
export class UiModule { }
