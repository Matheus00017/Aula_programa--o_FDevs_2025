import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { HttpClientModule} from '@angular/common/http'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HttpClientModule],
  template: `
    <h1>Meu Site Angular</h1>

    <a routerLink="/">Home</a> |
    <a routerLink="/list">Lista</a> |
    <a routerLink="/parent">parent</a>

    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
