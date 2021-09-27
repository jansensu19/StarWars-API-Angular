import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
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
