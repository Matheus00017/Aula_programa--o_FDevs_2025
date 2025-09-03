import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { first } from 'rxjs';
import { FirstComponent } from './componets/first-component/first-component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('curso-angular');
}
