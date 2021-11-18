import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColumnComponent } from '../column/column.component';
import { CardModule } from './card/card.module';
import { AddCardModule } from './add-card/add-card.module';

@NgModule({
  declarations: [
    ColumnComponent
  ],
  exports: [
    ColumnComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    AddCardModule
  ]
})
export class ColumnModule { }
