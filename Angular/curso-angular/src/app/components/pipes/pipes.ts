import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipes.html',
  styleUrls: ['./pipes.css']
})
export class Pipes {
  someText = 'testando o PIPE OPERATOR';

  today = new Date();
}
