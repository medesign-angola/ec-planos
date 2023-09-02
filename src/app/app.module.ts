import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { NgOptimizedImage } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideRemoteConfig(() => getRemoteConfig()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
