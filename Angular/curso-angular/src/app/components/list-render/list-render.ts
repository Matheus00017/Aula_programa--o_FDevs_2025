import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Animal } from '../../Animal';
import { ListService } from '../../services/list.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [CommonModule, RouterLink ],
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
  this.listService.getAll().subscribe((animals) => {
    console.log("Animais carregados:", animals);  // apenas para verificar
    this.animals = animals;  // salva na lista para renderizar no HTML
  });
  }
}
