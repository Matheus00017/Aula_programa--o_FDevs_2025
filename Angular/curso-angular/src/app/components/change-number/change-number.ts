import { CommonModule } from '@angular/common';
import { Component, output, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-change-number',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './change-number.html',
  styleUrls: ['./change-number.css']
})
export class ChangeNumber {
  @Output() changeNumber: EventEmitter<any> = new EventEmitter()

  handleClick() {
    this.changeNumber.emit();
    
  }
}
