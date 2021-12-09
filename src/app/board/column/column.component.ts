import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Card, Column } from '../@shared/models';
import { BoardService } from '../@shared/services/board.service';
import { UpdateColumnComponent } from '../update-column/update-column.component';
import { AddCardComponent } from './add-card/add-card.component';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {

  @Output() onColumnUpdated: EventEmitter<Column> = new EventEmitter();
  @Output() onColumn: EventEmitter<Column> = new EventEmitter();
  @Output() onCard: EventEmitter<Card> = new EventEmitter();
  @Input() column!: Column;
  cards!: Card[];
  card!: Card;

  constructor(private boardService: BoardService, public dialog: MatDialog) { }

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

  openCardDialog(id: string) {
    console.log("Mon id : " + id);
    this.boardService.getColumn(id).subscribe(response => {
      const dialogRef = this.dialog.open(AddCardComponent, { data: { rep: response } }); // Injection de données par modal
      console.log(response);
      dialogRef.afterClosed().subscribe(newCard => {
        this.ngOnInit();
      })
    }, error => {
      console.log(error);
    })
  }

  // Suppression de la colonne
  deleteColumn(id: string) {
    this.boardService.deleteColumn(id).subscribe(response => {
      console.log(response);
      this.onColumn.emit(response);
    }, error => {
      console.log(error);
    })
  }
 
  // Recuperation des cards
  private getCards(columnId:string) {
    this.boardService.getCards(columnId).subscribe(response => {
      const cardIndex = response.findIndex(r => r.columnId == this.column._id)
      console.log("Condition > " + cardIndex);
      if (cardIndex != -1) {
        this.cards = response;
      }
    })
  }

  // cardUpdated(card: Card) {
  //   console.log('this.columns > ', this.card)
  //   const cardIndex = this.cards.findIndex(c => c._id == card?._id);
  //       console.log('columnIndex > ', cardIndex)
  //       if (cardIndex != -1) {
  //         this.cards[cardIndex] = card;
  //         console.log('this.columns > ', this.cards)
  //       }
  // }



  ngOnInit(): void {
    this.getCards(this.column._id);
  }




}
