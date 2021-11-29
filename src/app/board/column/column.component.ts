import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { COLUMNS } from '../@shared/mock/column.mock';
import { Column } from '../@shared/models';
import { BoardService } from '../@shared/services/board.service';
import { UpdateColumnComponent } from '../update-column/update-column.component';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {

  @Output() onColumnUpdated: EventEmitter<Column> = new EventEmitter();
@Input() column!: Column;

  constructor(private boardService: BoardService,public dialog: MatDialog) { }

  // Modal
  openDialog(id: string) {
    console.log("Mon id : " + id);
    this.boardService.getColumn(id).subscribe(response => {
      const dialogRef = this.dialog.open(UpdateColumnComponent, { data: { rep: response } }); // Injection de données par modal
      console.log(response);
      dialogRef.afterClosed().subscribe(columnUpated => {
        this.onColumnUpdated.emit(columnUpated);
      })
    }, error => {
      console.log(error);
    })
  }

  // Suppression de la colonne
  deleteColumn(id: string) {
    this.boardService.deleteColumn(id).subscribe(response => {
      this.ngOnInit();
      console.log(response);
    }, error => {
      console.log(error);

    })
  }


  ngOnInit(): void {
  }




}
