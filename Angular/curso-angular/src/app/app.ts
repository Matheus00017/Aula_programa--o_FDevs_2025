import { Component, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './componets/first-component/first-component';
import { ParentData } from './components/parent-data/parent-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstComponent, ParentData],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App{

  userName = 'joaquim';


  protected readonly title = signal('curso-angular');
}
