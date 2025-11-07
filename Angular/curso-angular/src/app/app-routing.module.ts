import { Routes } from '@angular/router';
import { FirstComponent } from './components/first-component/first-component';
import { ListRender } from './components/list-render/list-render';

export const routes: Routes = [
  { path: '', component: FirstComponent },
  { path: 'list', component: ListRender }
];
