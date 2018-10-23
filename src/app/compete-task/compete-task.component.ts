import { Component, OnInit } from "@angular/core";
import { Totdodetail } from "../totdodetail";
import { TaskDetailService } from "../core/task-detail.service";

@Component({
  selector: "app-compete-task",
  templateUrl: "./compete-task.component.html",
  styleUrls: ["./compete-task.component.css"]
})
export class CompeteTaskComponent implements OnInit {
  
  public userData: Totdodetail[];
  public completetedData = [];

  constructor(private taslListService: TaskDetailService) {
    
    this.userData = [];
  }

  ngOnInit() {
    //  get the all user data
    this.userData = this.taslListService.gettodoDetail();
    this.userData.forEach(element => {
      if (element.iscompelte == true) {
        this.completetedData.push(element);
      }
    }); console.log(this.completetedData);
    
  }
}
