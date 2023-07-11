import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { AboutComponent } from './about/about.component';
import { BreafingComponent } from './breafing/breafing.component';
import { SloganComponent } from './slogan/slogan.component';
import { KnowMoreComponent } from './know-more/know-more.component';
import { SloganInovationComponent } from './slogan-inovation/slogan-inovation.component';
import { ServicesComponent } from './services/services.component';


@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    AboutComponent,
    BreafingComponent,
    SloganComponent,
    KnowMoreComponent,
    SloganInovationComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
