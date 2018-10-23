import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CompeteTaskComponent } from "./compete-task.component";
import { CompeteTaskRoutingModule } from "./compete-task-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [CommonModule, CompeteTaskRoutingModule, SharedModule],
  declarations: [CompeteTaskComponent]
})
export class CompeteTaskModule {}
