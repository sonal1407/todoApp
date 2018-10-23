import { Injectable } from "@angular/core";
import { Totdodetail } from "../totdodetail";

@Injectable()
export class TaskDetailService {

  public tododList: Totdodetail[];
  constructor() {
    this.tododList = [
      { id: 1, name: "sonal", iscompelte: true },
      { id: 2, name: "priya", iscompelte: false },
      { id: 3, name: "sonu", iscompelte: true },
      { id: 4, name: "dipak", iscompelte: false },
      { id: 4, name: "shailesh", iscompelte: true }
    ];
  }
  /**
   * gettotdoDetail returns the details of the todoList
   */
  
  public gettodoDetail(): Totdodetail[] {
    return this.tododList;
  }
}
