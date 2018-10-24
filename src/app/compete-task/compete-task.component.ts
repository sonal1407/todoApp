/**
 * author:Sonal Prajapati
 */
import { Component, OnInit } from "@angular/core";
import { Totdodetail } from "../totdodetail";
import { TaskDetailService } from "../core/task-detail.service";

@Component({
  selector: "app-compete-task",
  templateUrl: "./compete-task.component.html",
  styleUrls: ["./compete-task.component.css"]
})
export class CompeteTaskComponent implements OnInit {
  /**
   * list of data which is store in this array
   */
  public  todoListData: Totdodetail[];

  /**
   * list of the completed data which is store in thos array
   */
  public completedData = [];

  constructor(private taslListService: TaskDetailService) {
    
    this. todoListData = [];
  }

  ngOnInit() {
    /**
     * get all the data from the service and store in the array
     */
    this. todoListData = this.taslListService.gettodoDetail();
    
    this. todoListData.forEach(element => {
      /**
       * display only true or completedData
       */
      if (element.iscompelte == true) {
        this.completedData.push(element);
      }
      console.log(this.completedData);
      
    });
    
  }
}
