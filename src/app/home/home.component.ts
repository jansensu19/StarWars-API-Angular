import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section class="hero is-primary is-bold is-fullheight">
      <div class="container has-text-centered">
          <h1 class="title is-1 has-text-info">Star Wars Collection Chamber</h1>
        </div>
      <div class="hero-body">
        <div class="columns">
          <div class="column is-variable is-11 is-offset-7">
            <div class="box">
              <h3 class="subtitle is-3 has-text-black">Movie list</h3>
              <figure class="image is-square">
                <img src="/assets/img/starwars-banner.jpg">
              </figure>
              <div class="buttons is-centered">
                <a routerLink="/contact"><button class="button is-link is-hovered is-focused">See More</button></a>
              </div>
            </div>
          </div>
          <div class="column is-variable is-11 is-offset-7">
            <div class="box">
              <h3 class="subtitle is-3 has-text-black">Character List list</h3>
              <figure class="image is-square">
                <img src="/assets/img/starwars-character.jpg">
              </figure>
              <div class="buttons is-centered">
                <a class="centered" routerLink="/contact"><button class="button is-link is-hovered is-focused">See More</button></a>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </section>
  `,
  styles: [`
  .hero{
    background-image: url('/assets/img/home_bg.jpg') !important;
    background-size: cover;
    background-postion: center center;
  }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
