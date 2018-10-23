import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IncompeteTaskComponent } from "./incompete-task.component";

const routes: Routes = [
  { path: '', component: IncompeteTaskComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncompeteTaskRoutingModule {}
