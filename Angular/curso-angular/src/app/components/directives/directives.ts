import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  imports: [CommonModule],
  templateUrl: './directives.html',
  styleUrl: './directives.css'
})
export class Directives {
  size = 40
  font = 'Arial'
  color = 'red'

  classes = ['small-title', 'green-title'];

  underline = 'underline-title';
}
