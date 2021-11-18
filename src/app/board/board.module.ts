import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from '../board/board.component';
import { ColumnModule } from './column/column.module';
import { AddColumnModule } from './add-column/add-column.module';

@NgModule({
  declarations: [
    BoardComponent
  ],
  exports: [
    BoardComponent
  ],
  imports: [
    CommonModule,
    ColumnModule,
    AddColumnModule
  ]
})
export class BoardModule { }
