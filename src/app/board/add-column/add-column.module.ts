import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddColumnComponent } from './add-column.component';

@NgModule({
  declarations: [
    AddColumnComponent
  ],
  exports: [
    AddColumnComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AddColumnModule { }
