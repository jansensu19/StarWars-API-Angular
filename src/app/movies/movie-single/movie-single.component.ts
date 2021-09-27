import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/core/services/movie.service';

@Component({
  selector: 'app-movie-single',
  templateUrl: './movie-single.component.html',
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