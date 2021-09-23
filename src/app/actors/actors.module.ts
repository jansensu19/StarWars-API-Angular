import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActorsRoutingModule } from './actors-routing.module';
import { ActorListComponent } from './actor-list/actor-list.component';
import { ActorSingleComponent } from './actor-single/actor-single.component';


@NgModule({
  declarations: [
    ActorListComponent,
    ActorSingleComponent
  ],
  imports: [
    CommonModule,
    ActorsRoutingModule
  ]
})
export class ActorsModule { }
