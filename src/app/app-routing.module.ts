import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { AddTaskComponent } from "./add-task/add-task.component";
import { CompeteTaskComponent } from "./compete-task/compete-task.component";
import { IncompeteTaskComponent } from "./incompete-task/incompete-task.component";

const appRoutes: Routes = [
  {
    path: "addTask",
    loadChildren: "./add-task/add-task.module#AddTaskModule"
  },
  {
    path: "compeleteTask",
    loadChildren: "./compete-task/compete-task.module#CompeteTaskModule"
  },
  {
    path: "incompeteTask",
    loadChildren: "./incompete-task/incompete-task.module#IncompeteTaskModule"
  }
  // { path: ' ', component: AddTaskComponent },
  // { path: 'add', component: AddTaskComponent },
  // { path: 'compete', component: CompeteTaskComponent },
  // { path: 'incompete', component: IncompeteTaskComponent }
];

@NgModule({
  
  imports: [
    CommonModule, 
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  
})
export class AppRoutingModule {}
