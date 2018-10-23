import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddTaskComponent } from "./add-task.component";
import {AddtaskRoutingModule}from'../add-task/addtask-routing.module';

@NgModule({
  imports: [CommonModule, AddtaskRoutingModule],
  declarations: [AddTaskComponent]
})
export class AddTaskModule {}
