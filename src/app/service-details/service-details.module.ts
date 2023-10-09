import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { ServiceDetailsComponent } from './service-details.component';
import { ServiceDetailsRoutingModule } from './service-details-routing.rounting';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { HeroComponent } from './hero/hero.component';
import { IntroComponent } from './intro/intro.component';

@NgModule({
  declarations: [
    ServiceDetailsComponent,
    BreadcrumbComponent,
    HeroComponent,
    IntroComponent,
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    ServiceDetailsRoutingModule
  ]
})
export class SegmentDetailsModule { }