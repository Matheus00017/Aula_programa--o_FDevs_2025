import { Component, Directive, signal, } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './components/first-component/first-component';
import { ParentData } from './components/parent-data/parent-data';
import { Directives } from './components/directives/directives';

@Component({
  selector: 'app-root',                 //Esse é o seletor 
  imports: [RouterOutlet, FirstComponent, ParentData, Directives],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('curso-angular');

  userName = 'Joaquim'

  userData = {
    email: 'Joaquim@email.com',
    role: 'Admin',
  };
}
