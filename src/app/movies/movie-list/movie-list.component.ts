import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/core/services/movie.service';

@Component({
  selector: 'app-movie-list',
  template: `
    <section class="section">
      <div class="container">
        <div class="columns is-multiline" *ngIf="movies">
          <div class="column is-4" *ngFor="let movie of movies; let i = index">
            <div class="card">
              <div class="card-content">
                <a [routerLink]="'' + (i+1)" >{{ movie.title }}</a>
                <figure class="image is-4by3">
                  <img src="assets/img/{{i}}.jpg"  alt="">
                </figure>
                <p><br>Episode : {{ movie.episode_id }}</p>
                <p>Release Date : {{ movie.release_date }}</p>
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
export class MovieListComponent implements OnInit {
movies;

  constructor(private moviesService: MovieService) { }

  async ngOnInit() {
    this.movies = await this.moviesService.getFilms()
    console.log(this.movies)
  }

}