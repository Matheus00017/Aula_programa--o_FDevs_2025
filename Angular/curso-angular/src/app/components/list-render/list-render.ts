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

  showAge(animal: Animal): void {
  this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`
  }

  removeAnimal(animal: Animal): void {
    if (!animal.id) return;

    console.log('Removendo animal...');

    this.listService.removeAnimal(animal.id).subscribe({
      next: () => {
        // Remove da lista só depois que o backend confirmar
        this.animals = this.animals.filter(a => a.id !== animal.id);
        console.log('Animal removido!');
      },
      error: (err) => {
        console.error('Erro ao remover:', err);
        alert('Erro ao remover animal!');
      }
    });

  }

  getAnimals(): void {
    this.listService.getAll().subscribe({
      next: (animals) => {
        console.log("Animais carregados:", animals);
        this.animals = animals;
      },
      error: (err) => {
        console.error('Erro ao carregar:', err);
      }
    });
  }
}
