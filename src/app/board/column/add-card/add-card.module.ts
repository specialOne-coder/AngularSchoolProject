import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AddCardComponent } from './add-card.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AddCardComponent
  ],
  exports: [
    AddCardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule
  ]
})
export class AddCardModule { }
