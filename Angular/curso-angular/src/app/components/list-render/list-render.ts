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
  animals: Animal[] = [];

  animalDetails = '';

  constructor (private listService: ListService) {
    this.getAnimals()
  }

  showAge(Animal: Animal) {
  this.animalDetails = `O pet ${Animal.name} tem ${Animal.age} anos!`
  }

  removeAnimal(animal: Animal) {
    console.log('Removendo animal...')
    this.animals = this.listService.remove(this.animals, animal);
  }

  getAnimals(): void {
    this.listService.getAll() .subscribe((animals) => (this.animals = animals)); 
  }
}
