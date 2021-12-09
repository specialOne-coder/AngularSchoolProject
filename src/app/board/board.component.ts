import { Component, OnInit } from '@angular/core';
import { COLUMNS } from './@shared/mock/column.mock';
import { Card, Column } from './@shared/models';
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
  

  ngOnInit(): void {
    this.getColumns();
  }

  columnUpdated(column: Column) {
    console.log('this.columns > ', this.columns)
    console.log('column > ', column)
    const columnIndex = this.columns.findIndex(c => c._id == column?._id);
        console.log('columnIndex > ', columnIndex)
        if (columnIndex != -1) {
          this.columns[columnIndex] = column;
          console.log('this.columns > ', this.columns)
        }
  }

  columnUpdatedWithCard(card: Card) {
    this.getColumns();
  }

  delete(column:Column){
    this.getColumns();
  }

  // Recuperation des colonnes
  private getColumns() {
    this.boardService.getColumns().subscribe(response => {
      this.columns = response;
      console.log(response);
    }, error => {
      console.log(error);
    })
  }

}

