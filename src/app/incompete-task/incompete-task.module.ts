import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IncompeteTaskComponent}from'./incompete-task.component'
import { IncompeteTaskRoutingModule } from './incompete-task-routing.module';
import{SharedModule}from'../shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    IncompeteTaskRoutingModule,
    SharedModule
  ],
  declarations: [IncompeteTaskComponent]
})
export class IncompeteTaskModule { }
