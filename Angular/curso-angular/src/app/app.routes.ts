import { Routes } from '@angular/router';
import { FirstComponent } from './components/first-component/first-component';
import { ListRender } from './components/list-render/list-render';
import { ParentData } from './components/parent-data/parent-data';
import { ItemDetail } from './components/item-detail/item-detail';

export const routes: Routes = [
  { path: '', component: FirstComponent },
  { path: 'list', component: ListRender },
  { path: 'list/:id', component: ItemDetail },
  { path: 'parent', component: ParentData},
];
