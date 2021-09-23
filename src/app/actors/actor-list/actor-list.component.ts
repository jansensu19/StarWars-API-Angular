import { Component, OnInit } from '@angular/core';
import { ActorService } from 'src/app/core/services/actor.service';

@Component({
  selector: 'app-actor-list',
  template: `
    <section class="section">
      <div class="container">
        <div class="columns is-multiline" *ngIf="actors">
          <div class="column is-4" *ngFor="let actor of actors | async">
            {{ actor.results.name }}
          <div class="card">
            <div class="card-content">
              <a routerLink="/users/{{ actor.results.name }}">{{ actor.results.name }}</a>
            </div>
          </div>

          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
  ]
})
export class ActorListComponent implements OnInit {
  actors;

  constructor(private actorService: ActorService) { }

  ngOnInit() {
    this.actors = this.actorService.getActors()
  }

}
