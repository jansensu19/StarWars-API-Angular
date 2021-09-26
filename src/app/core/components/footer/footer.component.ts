import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
      <div class="container content has-text-centered">
        <p>Made with Love by <a href="linkedin.com/in/jansen-su-4a7471193">Jansen</a> from Indonesia</p>
      </div>
    </footer>
  `,
  styles: [`
  .footer{
    background-color: lightgrey;
  }
  `]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
