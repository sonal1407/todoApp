import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// import { CoreRoutingModule } from "./core-routing.module";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { TopbarComponent } from "./topbar/topbar.component";
import { CompeteTaskComponent } from "../compete-task/compete-task.component";
import { AppRoutingModule } from "../app-routing.module";

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [SidebarComponent, TopbarComponent],
  declarations: [SidebarComponent,TopbarComponent]
})
export class CoreModule {}
