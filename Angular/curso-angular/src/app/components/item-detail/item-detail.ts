import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Animal } from '../../Animal';
import { ListService } from '../../services/list.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './item-detail.html',
  styleUrls: ['./item-detail.css']
})
export class ItemDetail {
  animal?: Animal;

  constructor(private listService: ListService, private route:ActivatedRoute) {
    this.getAnimal()

    }

    getAnimal() {
      const id = Number(this.route.snapshot.paramMap.get("id"))
      this.listService.getItem(id).subscribe((animal) => (this.animal = animal))
  }
}
