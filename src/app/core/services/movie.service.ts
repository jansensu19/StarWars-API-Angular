import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieObj } from 'src/app/core/object/movieobj.model';

@Injectable()
export class MovieService {

  apiUrl = 'https://swapi.dev/api/films/'

  constructor(private http: HttpClient) { }

  tester(){
    this.http
    .get('https://swapi.dev/api/films/')
    .subscribe(data => {
      console.log(data);
    })
  }

  async getFilms(){
    let data;
    await this.http.get<any>(`${this.apiUrl}`).toPromise().then(response => data = response.results);
    return data
  }

  async getFilm(name: string){
    let data : MovieObj = new MovieObj()
    await this.http.get<MovieObj>(`${this.apiUrl}${name}`).toPromise().then(response => data = response);
    return data
  }
}