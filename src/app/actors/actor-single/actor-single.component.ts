import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActorService } from 'src/app/core/services/actor.service';

@Component({
  selector: 'app-actor-single',
  template: `
    <section class="section">
      <div class="container">

        <div class="card" *ngIf="actor">
          <h2>{{ actor.name }}</h2>
        </div>

      </div>
    </section>
  `,
  styles: [
  ]
})
export class ActorSingleComponent implements OnInit {
actor;
  constructor( private actorService: ActorService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(async params => {
      this.actor = await this.actorService.getActors()
      console.log(this.actor)
    });
  }
}