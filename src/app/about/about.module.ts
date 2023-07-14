import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { HeroComponent } from './hero/hero.component';
import { IntroComponent } from './intro/intro.component';
import { HistoryComponent } from './history/history.component';
import { CultureComponent } from './culture/culture.component';
//import { BannerComponent } from './banner/banner.component';



@NgModule({
  declarations: [
    AboutComponent,
    HeroComponent,
    IntroComponent,
    HistoryComponent,
    CultureComponent,
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    AboutRoutingModule,
  ]
})
export class AboutModule { }