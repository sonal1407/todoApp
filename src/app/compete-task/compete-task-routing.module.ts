import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompeteTaskComponent } from './compete-task.component';

const routes: Routes = [
  {path:'',component:CompeteTaskComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompeteTaskRoutingModule { }
