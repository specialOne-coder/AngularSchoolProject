import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddColumnComponent } from './board/add-column/add-column.component';
import { BoardComponent } from './board/board.component';
import { AddCardComponent } from './board/column/add-card/add-card.component';


const routes: Routes = [{ path: '', component: BoardComponent,pathMatch: 'full' }, 
{ path: 'add-column', component: AddColumnComponent },{ path: 'add-card', component: AddCardComponent }];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      //{ enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
