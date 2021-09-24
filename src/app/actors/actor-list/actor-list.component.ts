import { Component, OnInit } from '@angular/core';
import { ActorService } from 'src/app/core/services/actor.service';

@Component({
  selector: 'app-actor-list',
  template: `
    <section class="section">
      <div class="container">
        <div class="columns is-multiline" *ngIf="actors">
          <div class="column is-4" *ngFor="let actor of actors; let i = index">
            <div class="card">
              <div class="card-content">
                <a [routerLink]="'' + (i+1)" >{{ actor.name }}</a>
                <p><br>Height : {{ actor.height }}</p>
                <p>Birth Year : {{ actor.birth_year }}</p>
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

  async ngOnInit() {
    this.actors = await this.actorService.getActors()
    console.log(this.actors)
  }

}
