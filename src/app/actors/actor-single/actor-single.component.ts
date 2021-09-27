import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActorService } from 'src/app/core/services/actor.service';

@Component({
  selector: 'app-actor-single',
  templateUrl: './actor-single.component.html',
  styles: [
  ]
})
export class ActorSingleComponent implements OnInit {
actor;
  constructor( private actorService: ActorService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(async params => {
      const actorname = params['actorname'];
      this.actor = await this.actorService.getActor(actorname)
      console.log(this.actor)
    });
  }
}