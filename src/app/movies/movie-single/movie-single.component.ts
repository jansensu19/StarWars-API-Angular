import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/core/services/movie.service';

@Component({
  selector: 'app-movie-single',
  template: `
    <section class="section">
      <div class="container">

        <div class="card" *ngIf="movie">
          <section class="hero is-info">
            <div class="hero-body">
              <h1 class="title is-1 ml-4 mb-6">{{ movie.title }}</h1>
            </div>
          </section>
          
          <div class="message-body">
            <figure class="image is-3by4 mb-5 mt-6">
              <img src="./assets/img/movie/{{ movie.title }}.jpg"  alt="">
            </figure>
            <h2 class="subtitle is-4 ml-6 mb-1 pd-0">Episode : {{ movie.episode_id }}</h2>
            <h2 class="subtitle is-4 ml-6 mt-4 mb-4 pd-0">Opening Crawl : {{ movie.opening_crawl }}</h2>
            <h2 class="subtitle is-4 ml-6 mb-1 pd-0">Director : {{ movie.director }}</h2>
            <h2 class="subtitle is-4 ml-6 mb-1 pd-0">Producer : {{ movie.producer }}</h2>
            <h2 class="subtitle is-4 ml-6 mb-1 pd-0">Release Date : {{ movie.release_date }}</h2>
            <h2 class="subtitle is-4 ml-6 mb-1 pd-0">Created : {{ movie.created }}</h2>
            <h2 class="subtitle is-4 ml-6 mb-1 pd-0">Edited : {{ movie.edited }}</h2>
            <h2 class="subtitle is-4 ml-6 mb-1 pd-0">Url : {{ movie.url }}</h2>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
  ]
})
export class MovieSingleComponent implements OnInit {
movie;
  constructor( private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(async params => {
      const moviename = params['moviename'];
      this.movie = await this.movieService.getFilm(moviename)
      console.log(this.movie)
    });
  }
}