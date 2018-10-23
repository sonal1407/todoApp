import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  {TabelComponent}from'./tabel/tabel.component'
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[TabelComponent],
  declarations: [TabelComponent ]
})
export class SharedModule { }
