import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  { path: 'segments', loadChildren: () => import('./segments/segments.module').then(m => m.SegmentsModule) },
  { path: 'segment-details', loadChildren: () => import('./segment-details/segment-details.module').then(m => m.SegmentDetailsModule) },
  { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
  { path: 'project-details/:projectName', loadChildren: () => import('./project-details/project-details.module').then(m => m.ProjectDetailsModule) },
  { path: 'specialities', loadChildren: () => import('./specialities/specialities.module').then(m => m.SpecialitiesModule) },
  { path: 'posts', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule) },
  { path: 'post-details/:postSlug', loadChildren: () => import('./post-details/post-details.module').then(m => m.PostDetailsModule) },
  { path: 'projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule) },
  { path: 'service-details/:serviceTitle', loadChildren: () => import('./service-details/service-details.module').then(m => m.SegmentDetailsModule) },
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    initialNavigation: 'enabledBlocking'
}),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
