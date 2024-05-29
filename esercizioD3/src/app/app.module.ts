import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './mainthing/navbar/navbar.component';
import { FooterComponent } from './mainthing/footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CarrelloComponent } from './carrello/carrello.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PreferitiComponent } from './preferiti/preferiti.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    CarrelloComponent,
    PreferitiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
