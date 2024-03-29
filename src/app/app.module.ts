import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClient } from 'selenium-webdriver/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClient,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
