import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ProjectDetailsRoutingModule } from './project-details-routing.module';
import { HeroComponent } from './hero/hero.component';
import { ProjectsComponent } from './project-details.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { IntroComponent } from './intro/intro.component';
import { ProjectsSliderComponent } from './projects-slider/projects-slider.component';
import { SuggestionComponent } from './suggestion/suggestion.component';
import { SectionComponent } from './section/section.component';




@NgModule({
  declarations: [
    ProjectsComponent,
    HeroComponent,
    BreadcrumbComponent,
    IntroComponent,
    ProjectsSliderComponent,
    SuggestionComponent,
    SectionComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    ProjectDetailsRoutingModule,
    
  ],
  exports: [
    HeroComponent,
    BreadcrumbComponent
  ]
})
export class ProjectDetailsModule { }