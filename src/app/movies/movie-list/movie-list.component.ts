import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/core/services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
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