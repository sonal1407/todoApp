import { Injectable } from "@angular/core";
import { Totdodetail } from "../totdodetail";

@Injectable()
export class TaskDetailService {
  public tododDtail: Totdodetail[];
  constructor() {
    this.tododDtail = [
      { id: 1, name: "sonal", iscompelte: true },
      { id: 2, name: "nikul", iscompelte: false },
      { id: 3, name: "sahu", iscompelte: true },
      { id: 4, name: "raj", iscompelte: false },
      { id: 4, name: "nikul", iscompelte: true }
    ];
  }
  /**
   * gettotdoDetail returns the details of the todoList
   */
  public gettodoDetail(): Totdodetail[] {
    return this.tododDtail;
  }
}
