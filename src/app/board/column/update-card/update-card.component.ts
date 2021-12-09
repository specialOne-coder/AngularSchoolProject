import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { tap } from 'rxjs/operators';
import { Card } from '../../@shared/models';
import { BoardService } from '../../@shared/services/board.service';


@Component({
  selector: 'app-update-card',
  templateUrl: './update-card.component.html',
  styleUrls: ['./update-card.component.scss']
})

export class UpdateCardComponent implements OnInit {



  // Formulaire
  cardUpdateForm = new FormGroup({
    titreCard: new FormControl('', [Validators.required]),
  });


  constructor(
    public dialogRef: MatDialogRef<UpdateCardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { rep: Card }, 
    private boardService: BoardService) { }

  // Assignation des données parents aux inputs du formulaire
  getData(){
    this.cardUpdateForm.get('titreCard')?.setValue(this.data.rep.titreCard);
    this.cardUpdateForm.get('columnId')?.setValue(this.data.rep.columnId);
  }

  // Mise à jour de la colonne
  updateCard() {
    console.log(" Form"+this.cardUpdateForm.value);
    const id = this.data.rep._id;
    if (this.cardUpdateForm.valid) {
      console.log(" Form upd send"+this.cardUpdateForm.value); 
      this.boardService.updateCard(id, this.cardUpdateForm.value).pipe(
        tap(() => {
        this.dialogRef.close(<Card>{ ...this.cardUpdateForm.value, _id: id });
        })
      ).subscribe()
    }
  }



  ngOnInit(): void {
    this.getData();
  }

}
