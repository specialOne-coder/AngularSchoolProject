import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ColumnComponent } from '../column/column.component';
import { CardModule } from './card/card.module';
import { AddCardModule } from './add-card/add-card.module';
import { UpdateCardComponent } from './update-card/update-card.component';

@NgModule({
  declarations: [
    ColumnComponent,
    UpdateCardComponent
  ],
  exports: [
    ColumnComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    AddCardModule,
    ReactiveFormsModule,
  ]
})
export class ColumnModule { }
