import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { SeeAllSegmentsButtonComponent } from './components/see-all-segments-button/see-all-segments-button.component';
import { SeeAllSpecialitiesButtonComponent } from './components/see-all-specialities-button/see-all-specialities-button.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SeeAllSegmentsButtonComponent,
    SeeAllSpecialitiesButtonComponent,
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    RouterModule
  ],
  exports: [
    SeeAllSegmentsButtonComponent,
    SeeAllSpecialitiesButtonComponent
  ]
})
export class SharedModule { }
