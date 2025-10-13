import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Animal } from '../../Animal';

@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-render.html',
  styleUrls: ['./list-render.css']
})
export class ListRender {
  animals: Animal[] = [
    {name: 'Tom', type: 'cat', age: 4},
    {name: 'Jerry', type: 'mouse', age: 1},
    {name: 'Spyke', type: 'dog', age: 5},
    {name: 'Bob', type: 'horse', age: 2}
  ];

  animalDetails = '';

  showAge(Animal: Animal) {
  this.animalDetails = `O pet ${Animal.name} tem ${Animal.age} anos!`
  }
}
