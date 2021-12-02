import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Column } from '../@shared/models';
import { tap } from 'rxjs/operators';
import { BoardService } from '../@shared/services/board.service';

@Component({
  selector: 'app-update-column',
  templateUrl: './update-column.component.html',
  styleUrls: ['./update-column.component.scss']
})
export class UpdateColumnComponent implements OnInit {



  // Formulaire
  columnUpdateForm = new FormGroup({
    titreColumn: new FormControl('', [Validators.required]),
    positionColumn: new FormControl('', [Validators.required]),
    textColumn: new FormControl('', [Validators.required]),
  });


  constructor(
    public dialogRef: MatDialogRef<UpdateColumnComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { rep: Column }, 
  private boardService: BoardService) { }

  // Assignation des données parents aux inputs du formulaire
  getData(){
    this.columnUpdateForm.get('titreColumn')?.setValue(this.data.rep.titreColumn);
    this.columnUpdateForm.get('positionColumn')?.setValue(this.data.rep.positionColumn);
    this.columnUpdateForm.get('textColumn')?.setValue(this.data.rep.textColumn);
  }

  // Mise à jour de la colonne
  updateColumn() {
    const id = this.data.rep._id;
    if (this.columnUpdateForm.valid) {
      this.boardService.updateColumn(id, this.columnUpdateForm.value).pipe(
        tap(() => {
        this.dialogRef.close(<Column>{ ...this.columnUpdateForm.value, _id: id });
        })
      ).subscribe()
    }
  }



  ngOnInit(): void {
    this.getData();
  }

}
