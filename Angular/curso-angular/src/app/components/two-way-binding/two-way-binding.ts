import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-binding',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './two-way-binding.html',
  styleUrls: ['./two-way-binding.css']
})
export class TwoWayBinding {
  name: string = '';
}
