import { Component, OnInit } from "@angular/core";
import { TaskDetailService } from "../core/task-detail.service";
import { Totdodetail } from "../totdodetail";

@Component({
  selector: "app-incompete-task",
  templateUrl: "./incompete-task.component.html",
  styleUrls: ["./incompete-task.component.css"]
})
export class IncompeteTaskComponent implements OnInit {
  public todoListData: Totdodetail[];
  public todoInCompelteList: Totdodetail[];

  constructor(private taskDetailService: TaskDetailService) {
    this.todoListData = [];
    this.todoInCompelteList = [];
  }

  ngOnInit() {
    this.todoListData = this.taskDetailService.gettodoDetail();
    // console.log(this.todoListData);
    for (let index = 0; index < this.todoListData.length; index++) {
      const element = this.todoListData[index];
      if (element.iscompelte == false) {
        console.log(element);
        this.todoInCompelteList.push(element);
        console.log(this.todoInCompelteList);
      }
    }
  }
}
