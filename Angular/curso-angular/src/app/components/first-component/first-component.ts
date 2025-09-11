import { Component } from '@angular/core';


@Component({
  selector: 'app-first-component',
  standalone: true, 
  imports: [],
  templateUrl: './first-component.html',
  styleUrl: './first-component.css'
})
export class FirstComponent {
  name: string = 'Matheus';
  age: number = 20;
  job = 'Programador';
  hobbies = ["Correr","Jogar", "Estudar", "Programar"]
  car = {
    name: "polo",
    year: 2019
  }
}
