import { Component, OnInit } from '@angular/core';
import { COLUMNS } from './@shared/mock/column.mock';
import { Column } from './@shared/models';
import { BoardService } from './@shared/services/board.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UpdateColumnComponent } from './update-column/update-column.component';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  columns!: Column[];
  constructor(private boardService: BoardService, public dialog: MatDialog) { }

  // Modal
  openDialog(id: string) {
    console.log("Mon id : " + id);
    this.boardService.getColumn(id).subscribe(response => {
      const dialogRef = this.dialog.open(UpdateColumnComponent, { data: { rep: response } }); // Injection de données par modal
      console.log(response);
      dialogRef.afterClosed().subscribe(columnUpated => {
        const columnIndex = this.columns.findIndex(c => c._id == columnUpated._id);
        if(columnIndex != -1) {
          this.columns[columnIndex] = columnUpated;
        }
      })
    }, error => {
      console.log(error);
    })


  }

  // Recuperation des colonnes
  getColumns() {
    this.boardService.getColumns().subscribe(response => {
      this.columns = response;
      console.log(response);
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
    this.getColumns();
  }

}

