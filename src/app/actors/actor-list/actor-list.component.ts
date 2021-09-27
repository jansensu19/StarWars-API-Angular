import { Component, OnInit } from '@angular/core';
import { ActorService } from 'src/app/core/services/actor.service';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styles: [
  ]
})
export class ActorListComponent implements OnInit {
  actors;

  constructor(private actorService: ActorService) { }

  async ngOnInit() {
    this.actors = await this.actorService.getActors()
    console.log(this.actors)
  }

}
