import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { HeroComponent } from './hero/hero.component';
import { ContainerComponent } from './container/container.component';
import { ProjectCardComponent } from './container/project-card/project-card.component';


@NgModule({
  declarations: [
    ProjectsComponent,
    BreadcrumbComponent,
    HeroComponent,
    ContainerComponent,
    ProjectCardComponent,
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    ProjectsRoutingModule,
    
  ],
  exports: [
  ]
})
export class ProjectsModule { }