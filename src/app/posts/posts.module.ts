import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { HeroComponent } from './hero/hero.component';
import { ContainerComponent } from './container/container.component';
import { BrochureCardComponent } from './container/brochure-card/brochure-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostCardComponent } from './container/post-card/post-card.component';



@NgModule({
  declarations: [
   PostsComponent,
   HeroComponent,
   ContainerComponent,
   BrochureCardComponent,
   PostCardComponent,
   
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    PostsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PostsModule { }