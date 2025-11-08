import { Router, RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './components/first-component/first-component';
import { ListRender } from './components/list-render/list-render';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', component: FirstComponent },
  { path: 'list', component: ListRender },
  { path: 'parent', loadComponent: () => import('./components/parent-data/parent-data').then(m => m.ParentData) }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule {}
