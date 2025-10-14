import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Animal } from '../../Animal';
import { ListService } from '../../services/list.service';

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

  constructor (private listService: ListService) {}

  showAge(Animal: Animal) {
  this.animalDetails = `O pet ${Animal.name} tem ${Animal.age} anos!`
  }

  removeAnimal(animal: Animal) {
    console.log('Removendo animal...')
    this.animals = this.listService.remove(this.animals, animal);
  }
}
