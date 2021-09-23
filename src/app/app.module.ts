import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { UserService } from "./core/services/user.service";
import { UsersModule } from "./users/users.module";
import { ActorsModule } from './actors/actors.module';
import { ActorService } from "./core/services/actor.service";

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
    UsersModule,
    ActorsModule,
    HttpClientModule,
    CoreModule
  ],
  providers: [
    UserService,
    ActorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
