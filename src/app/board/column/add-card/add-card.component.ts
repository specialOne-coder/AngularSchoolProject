import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { tap } from 'rxjs';
import { Card, Column } from '../../@shared/models';
import { BoardService } from '../../@shared/services/board.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent implements OnInit {

  addCardForm = new FormGroup({
    titreCard: new FormControl('', [Validators.required]),
    columnId: new FormControl('', [Validators.required]),
  });

  constructor(public dialogRef: MatDialogRef<AddCardComponent>, @Inject(MAT_DIALOG_DATA) public data: { rep: Card }, private boardService: BoardService) { }

  addCard() {
    const id = this.data.rep._id;
    if (this.addCardForm.valid) {
      this.boardService.addCard(this.addCardForm.value).pipe(
        tap(() => {
          this.dialogRef.close(<Card>{ ...this.addCardForm.value, _id: id });
        })
      ).subscribe()
    }
  }

  ngOnInit(): void {
    this.addCardForm.get('columnId')?.setValue(this.data.rep._id);
  }

}
