import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { COLUMNS } from '../@shared/mock/column.mock';
import { Column } from '../@shared/models';
import { BoardService } from '../@shared/services/board.service';

@Component({
  selector: 'app-add-column',
  templateUrl: './add-column.component.html',
  styleUrls: ['./add-column.component.scss']
})

export class AddColumnComponent implements OnInit {

  @Output() newColumnEvent = new EventEmitter<Column[]>();
  column!: Column;
  constructor(private boardService: BoardService) { }

  columnForm = new FormGroup({
    titreColumn: new FormControl('',[Validators.required]),
    positionColumn: new FormControl('',[Validators.required]),
    textColumn: new FormControl('',[Validators.required]),
  });

  addColumn() {
    if (this.columnForm.valid) {
      this.boardService.addColumn(this.columnForm.value).subscribe(response => {
        //this.router.navigate(['']);
        this.columnForm.reset();
        console.log(response);
      }, error => {
        console.log(error);
      })
    }
  }

 
  ngOnInit(): void {
  }

}
