import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './components/first-component/first-component';
import { ListRender } from './components/list-render/list-render';
import { ItemDetail } from './components/item-detail/item-detail';
import { ParentData } from './components/parent-data/parent-data';

export const routes: Routes = [
  { path: '', component: FirstComponent },
  { path: 'list', component: ListRender},
  { path: 'list/:id', component: ItemDetail },
  { path: 'parent', component: ParentData },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule {}
