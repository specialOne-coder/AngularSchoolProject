import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCardComponent } from './add-card.component';

@NgModule({
  declarations: [
    AddCardComponent
  ],
  exports: [
    AddCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AddCardModule { }
