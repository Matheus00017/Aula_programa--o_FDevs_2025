import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-change-number',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './change-number.html',
  styleUrls: ['./change-number.css']
})
export class ChangeNumber {
  handleClick() {
    console.log('Mudou o número');
    
  }
}
