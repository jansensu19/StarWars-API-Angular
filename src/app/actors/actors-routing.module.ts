import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorListComponent } from "./actor-list/actor-list.component";
import { ActorSingleComponent } from './actor-single/actor-single.component';

const routes: Routes = [
  {
    path: '',
    component: ActorListComponent
  },
  {
    path: ':actorname',
    component: ActorSingleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActorsRoutingModule { }
