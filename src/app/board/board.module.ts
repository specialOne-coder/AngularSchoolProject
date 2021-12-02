import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from '../board/board.component';
import {  HttpClientModule } from '@angular/common/http';
import { ColumnModule } from './column/column.module';
import { AddColumnModule } from './add-column/add-column.module';
import { RouterModule } from '@angular/router';
import { UpdateColumnComponent } from './update-column/update-column.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@NgModule({
  declarations: [
    BoardComponent,
    UpdateColumnComponent
  ],
  exports: [
    BoardComponent
  ],
  imports: [
    CommonModule,
    ColumnModule,
    AddColumnModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
  ]
})
export class BoardModule { }
