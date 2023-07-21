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
import { SegmentsSpecialitiesComponent } from './segments-specialities/segments-specialities.component';
import { SpecialitiesComponent } from './segments-specialities/specialities/specialities.component';
import { SegmentsComponent } from './segments-specialities/segments/segments.component';
import { SharedModule } from '../shared/shared.module';
import { KnowMoreSegmentsComponent } from './know-more-segments/know-more-segments.component';
import { ProjectsComponent } from './projects/projects.component';
import { ClientsComponent } from './clients/clients.component';
import { AboutModule } from '../about/about.module';
import { HelpBuildingComponent } from './help-building/help-building.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EcPlanosBackgroundComponent } from './ec-planos-background/ec-planos-background.component';
import { PostsComponent } from './posts/posts.component';


@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    AboutComponent,
    BreafingComponent,
    SloganComponent,
    KnowMoreComponent,
    SloganInovationComponent,
    ServicesComponent,
    SegmentsSpecialitiesComponent,
    SpecialitiesComponent,
    SegmentsComponent,
    KnowMoreSegmentsComponent,
    ProjectsComponent,
    ClientsComponent,
    HelpBuildingComponent,
    ContactUsComponent,
    EcPlanosBackgroundComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    HomeRoutingModule,
    SharedModule,
    AboutModule
  ]
})
export class HomeModule { }
