import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Card } from '../../@shared/models';
import { BoardService } from '../../@shared/services/board.service';
import { UpdateCardComponent } from '../update-card/update-card.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {

  @Output() onCardUpdated: EventEmitter<Card> = new EventEmitter();
  @Output() onCard: EventEmitter<Card> = new EventEmitter();

  @Input() card!: Card;

  openUpdateCardDialog(id: number){
    console.log("Mon id : " + id);
    this.boardService.getCard(id).subscribe(response => {
      const dialogRef = this.dialog.open(UpdateCardComponent, { data: { rep: response } }); // Injection de données par modal
      console.log(response);
      dialogRef.afterClosed().subscribe(columnUpated => {
        this.onCardUpdated.emit(columnUpated);
      })
    }, error => {
      console.log(error);
    })
  }

  constructor(private boardService:BoardService, public dialog: MatDialog) { }

  deleteCard(id:number){
    this.boardService.deleteCard(id).subscribe(rep=>{
      this.onCard.emit(rep);
    });
  }

  ngOnInit(): void {
  }

}
