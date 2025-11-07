import { Routes } from '@angular/router';
import { FirstComponent } from './components/first-component/first-component';
import { ListRender } from './components/list-render/list-render';
import { ParentData } from './components/parent-data/parent-data';

export const routes: Routes = [
  { path: '', component: FirstComponent },
  { path: 'list', component: ListRender },
  { path: 'parent', component: ParentData}
];
