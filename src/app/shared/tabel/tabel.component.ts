import { Component, OnInit, Input } from "@angular/core";
import { TaskDetailService } from "../../core/task-detail.service";
import { Totdodetail } from "../../totdodetail";

@Component({
  selector: "app-tabel",
  templateUrl: "./tabel.component.html",
  styleUrls: ["./tabel.component.css"]
})
export class TabelComponent implements OnInit {
  @Input()
  public listOfTask: Totdodetail[];
  constructor(private taskDetailService: TaskDetailService) {
    this.listOfTask = [];
  }

  ngOnInit() {
    this.listOfTask = this.taskDetailService.gettodoDetail();
    console.log(this.listOfTask);
  }
}
