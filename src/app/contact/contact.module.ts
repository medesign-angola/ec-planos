import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';



@NgModule({
  declarations: [
    ContactComponent,
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    ContactRoutingModule,
  ],
})

export class ContactModule { }