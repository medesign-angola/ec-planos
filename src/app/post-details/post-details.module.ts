import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { PostDetailsComponent } from './post-details.component';
import { PostDetailsRoutingModule } from './post-details-routing.module';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { HeroComponent } from './hero/hero.component';
import { ContentComponent } from './content/content.component';
import { RelatedNewsSliderComponent } from './related-news-slider/related-news-slider.component';


@NgModule({
  declarations: [
    PostDetailsComponent,
    BreadcrumbComponent,
    HeroComponent,
    ContentComponent,
    RelatedNewsSliderComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    PostDetailsRoutingModule
  ]
})
export class PostDetailsModule { }