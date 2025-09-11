import { Component, signal, } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './components/first-component/first-component';
import { ParentData } from './components/parent-data/parent-data';

@Component({
  selector: 'app-root',                 //Esse é o seletor 
  imports: [RouterOutlet, FirstComponent,ParentData],
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
