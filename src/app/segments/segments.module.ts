import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { SegmentsRoutingModule } from './segments-routing.module';
import { SegmentsComponent } from './segments.component';
import { HeroComponent } from './hero/hero.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ContainerComponent } from './container/container.component';
import { SegmentCardComponent } from './container/segment-card/segment-card.component';



@NgModule({
  declarations: [
    SegmentsComponent,
    HeroComponent,
    BreadcrumbComponent,
    ContainerComponent,
    SegmentCardComponent,
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    SegmentsRoutingModule,
  ],
  exports: [
    SegmentCardComponent
  ]
})
export class SegmentsModule { }