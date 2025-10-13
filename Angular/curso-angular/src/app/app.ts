import { Component, Directive, signal, } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './components/first-component/first-component';
import { ParentData } from './components/parent-data/parent-data';
import { Directives } from './components/directives/directives';
import { IfRender } from './components/if-render/if-render';
import { Eventos } from './components/eventos/eventos';
import { Emitter } from './components/emitter/emitter';
import { ListRender } from './components/list-render/list-render';
import { Pipes } from './components/pipes/pipes';
import { TwoWayBinding } from './components/two-way-binding/two-way-binding';


@Component({
  selector: 'app-root',                 //Esse é o seletor 
  imports: [RouterOutlet, FirstComponent, ParentData, Directives, IfRender, Eventos, Emitter, ListRender, Pipes, TwoWayBinding],
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
