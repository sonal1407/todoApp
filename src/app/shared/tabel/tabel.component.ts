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
  public todoList: Totdodetail[];
  
  constructor() {
    
  }

  ngOnInit() {
    
  }
}
