import { Component, OnInit } from "@angular/core";
import { TaskDetailService } from "../core/task-detail.service";
import { Totdodetail } from "../totdodetail";

@Component({
  selector: "app-incompete-task",
  templateUrl: "./incompete-task.component.html",
  styleUrls: ["./incompete-task.component.css"]
})
export class IncompeteTaskComponent implements OnInit {
  /**
     * list of data which is store in this array
     */
  public userData: Totdodetail[];

  /**
   * list of the InCompleted data which is store in thos array
   */
  public inCompletedData = [];

  constructor(private taslListService: TaskDetailService) {

    this.userData = [];
  }

  ngOnInit() {
    /**
    * get all the data from the service and store in the array
    */
    this.userData = this.taslListService.gettodoDetail();
    /**
           * display only false or InCompletedData
           */
    this.userData.forEach(element => {
      if (element.iscompelte == false) {
        this.inCompletedData.push(element);
      }
    });

  }
}
