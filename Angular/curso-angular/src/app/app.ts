import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <h1>Meu Site Angular</h1>

    <a routerLink="/">Home</a> |
    <a routerLink="/lista">Lista</a>

    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
