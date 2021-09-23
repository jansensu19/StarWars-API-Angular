import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ActorService {

  apiUrl = 'https://swapi.dev/api/people/'

  constructor(private http: HttpClient) { }

  tester(){
    this.http
    .get('https://swapi.dev/api/people/')
    .subscribe(data => {
      console.log(data);
    })
  }

  getActors(){
    return this.http.get(`${this.apiUrl}`);
  }

  getActor(name: string){
    return this.http.get(`${this.apiUrl}/${name}?per_page=10`);
  }
}
