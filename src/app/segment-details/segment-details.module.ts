import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { SegmentDetailsRoutingModule } from './segment-details-routing.routing';
import { SegmentDetailsComponent } from './segment-details.component';
import { HeroComponent } from './hero/hero.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { SegmentsModule } from '../segments/segments.module';
import { IntroComponent } from './intro/intro.component';


@NgModule({
  declarations: [
    SegmentDetailsComponent,
    HeroComponent,
    BreadcrumbComponent,
    IntroComponent,
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    SegmentDetailsRoutingModule,
    SegmentsModule
  ]
})
export class SegmentDetailsModule { }