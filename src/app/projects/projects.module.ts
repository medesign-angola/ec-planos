import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';
import { HeroComponent } from './hero/hero.component';
import { ProjectsComponent } from './projects.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { IntroComponent } from './intro/intro.component';
import { ProjectsSliderComponent } from './projects-slider/projects-slider.component';
import { SuggestionComponent } from './suggestion/suggestion.component';




@NgModule({
  declarations: [
    ProjectsComponent,
    HeroComponent,
    BreadcrumbComponent,
    IntroComponent,
    ProjectsSliderComponent,
    SuggestionComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    ProjectsRoutingModule,
    
  ],
  exports: [
    HeroComponent,
    BreadcrumbComponent
  ]
})
export class ProjectsModule { }