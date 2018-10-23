import { Component, OnInit } from "@angular/core";
import { Totdodetail } from "../totdodetail";

@Component({
  selector: "app-compete-task",
  templateUrl: "./compete-task.component.html",
  styleUrls: ["./compete-task.component.css"]
})
export class CompeteTaskComponent implements OnInit {
  public data: Totdodetail[];
  constructor() {}

  ngOnInit() {}
}
