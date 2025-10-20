import { NgModule } from "@angular/core";
import { Routes, RouterModule} from "@angular/router";
import { FirstComponent } from "./components/first-component/first-component";
import { ListRender } from "./components/list-render/list-render";

const routes: Routes = [
    {path: '', component: FirstComponent},
    {path: 'list', component: ListRender}
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
