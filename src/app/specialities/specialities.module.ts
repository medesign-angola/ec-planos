import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { SpecialitiesComponent } from './specialities.component';
import { SpecialitiesRoutingModule } from './specialities-routing.module';
import { HeroComponent } from './hero/hero.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ContainerComponent } from './container/container.component';
import { SpecialityCardComponent } from './container/speciality-card/speciality-card.component';




@NgModule({
  declarations: [
    SpecialitiesComponent,
    HeroComponent,
    BreadcrumbComponent,
    ContainerComponent,
    SpecialityCardComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    SpecialitiesRoutingModule
  ]
})
export class SpecialitiesModule { }