import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { first } from 'rxjs';

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [CommonModule, FirstComponent],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.css'
})

export class FirstComponent {
  name: string = 'Matheus';
  age: number = 20;
  job = 'programador';
  hobbies = ["Correr","Jogar","Estudar"];
  car = {
    name: "polo",
    year: 2019,
  }
}
