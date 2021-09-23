import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `

    <section class="hero is-primary">
      <div class="hero-body has-text-centered">
        <p class="title">Star Wars Collection Chamber</p>
      </div>
    </section>

    <section class="hero wrapper is-primary is-bold is-fullheight">
  
      <div class="container has-text-centered mt-6">
          <h1 class="title is-1 has-text-primary-dark"></h1>
        </div>

      <div class="hero-body">
        <div class="columns is-mobile mb-6">
          <div class="column is-11 is-offset-7">
            <div class="box">

              <h3 class="subtitle is-3 has-text-black has-text-centered">Movie list</h3>
              <figure class="image is-square">
                <img src="/assets/img/starwars-banner.jpg">
              </figure>

              <div class="buttons is-centered mt-5">
                <a routerLink="/contact"><button class="button is-link is-hovered is-focused">See More</button></a>
              </div>

            </div>
          </div>

          <div class="column is-variable is-11 is-offset-7">
            <div class="box">

              <h3 class="subtitle is-3 has-text-black has-text-centered">Character List list</h3>
              <figure class="image is-square">
                <img src="/assets/img/starwars-character.jpg">
              </figure>

              <div class="buttons is-centered mt-5">
                <a class="centered" routerLink="/contact"><button class="button is-link is-hovered is-focused">See More</button></a>
              </div>
              
            </div>
          </div> 
        </div>
      </div>
    </section>
  `,
  styles: [`
  .wrapper{
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
