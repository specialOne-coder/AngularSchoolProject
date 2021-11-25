import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
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
    CommonModule,
    ReactiveFormsModule
  ]
})
export class AddColumnModule { }
