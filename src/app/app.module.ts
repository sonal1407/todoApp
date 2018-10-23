import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
// import { AppRoutingModule } from './app-routing.module';
import { AppRoutingModule } from "./app-routing.module";
import { TaskDetailService } from "./core/task-detail.service";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    SharedModule,
   
  ],
  providers: [TaskDetailService],
  bootstrap: [AppComponent]
})
export class AppModule {}
