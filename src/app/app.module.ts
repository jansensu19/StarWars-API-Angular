import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ActorsModule } from './actors/actors.module';
import { ActorService } from "./core/services/actor.service";
import { MovieService } from './core/services/movie.service';
import { MoviesModule } from './movies/movies.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ActorsModule,
    MoviesModule,
    HttpClientModule,
    CoreModule
  ],
  providers: [
    ActorService,
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
