import { Router, RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './components/first-component/first-component';
import { ListRender } from './components/list-render/list-render';
import { NgModule } from '@angular/core';
import { ItemDetail } from './components/item-detail/item-detail';

export const routes: Routes = [
  { path: '', component: FirstComponent },
  { path: 'list', loadComponent: () => import('./components/list-render/list-render').then(m => m.ListRender) },
{ path: 'list/:id', loadComponent: () => import('./components/item-detail/item-detail').then(m => m.ItemDetail) },
  { path: 'parent', loadComponent: () => import('./components/parent-data/parent-data').then(m => m.ParentData) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule {}
