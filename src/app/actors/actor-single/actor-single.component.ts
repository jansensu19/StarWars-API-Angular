import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActorService } from 'src/app/core/services/actor.service';

@Component({
  selector: 'app-actor-single',
  template: `
    <section class="section">
      <div class="container">
        <div class="card" *ngIf="actor">
          <section class="hero is-info">
            <div class="hero-body">
              <h1 class="title is-1 ml-4 mb-6">{{ actor.name }}</h1>
            </div>
          </section>

            
          <div class="message-body">
            <figure class="image is-4by3" *ngFor="let i = index">
                <img src="assets/img/{{i  + 1}}.jpg"  alt="">
            </figure>
            <h2 class="subtitle is-4 ml-6 mb-1 pd-0">Height : {{ actor.height }}</h2>
            <h2 class="subtitle is-4 ml-6 mb-1 pd-0">Mass : {{ actor.mass }}</h2>
            <h2 class="subtitle is-4 ml-6 mb-1 pd-0">Hair Color : {{ actor.hair_color }}</h2>
            <h2 class="subtitle is-4 ml-6 mb-1 pd-0">Skin Color : {{ actor.skin_color }}</h2>
            <h2 class="subtitle is-4 ml-6 mb-1 pd-0">Eye Color : {{ actor.eye_color }}</h2>
            <h2 class="subtitle is-4 ml-6 mb-1 pd-0">Birth Year : {{ actor.birth_year }}</h2>
            <h2 class="subtitle is-4 ml-6 mb-1 pd-0">Gender : {{ actor.gender }}</h2>
            <h2 class="subtitle is-4 ml-6 mb-1 pd-0">Created : {{ actor.created }}</h2>
            <h2 class="subtitle is-4 ml-6 mb-1 pd-0">Edited : {{ actor.edited }}</h2>
            <h2 class="subtitle is-4 ml-6 mb-1 pd-0">Url : {{ actor.url }}</h2>
          </div>
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
      const actorname = params['actorname'];
      this.actor = await this.actorService.getActor(actorname)
      console.log(this.actor)
    });
  }
}