import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { apiUrl } from 'src/environments/environment';
import { Card, Column } from '../models';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private http: HttpClient) { }

  // Création de la colonne
  addColumn(data: Column): Observable<Column[]> {
    return this.http.post<Column[]>(`${apiUrl}/columns`, data);
  }

  // Récupération des colonnes
  getColumns(): Observable<Column[]> {
    return this.http.get<Column[]>(`${apiUrl}/columns`);
  }

  // Récupération d'une colonne donnée
  getColumn(id: string): Observable<Column> {
    return this.http.get<Column>(`${apiUrl}/columns/` + id);
  }

  // Mise à jour d'une colonne donnée
  updateColumn(id: string, data: Column): Observable<Column> {
    return this.http.put<Column>(`${apiUrl}/columns/` + id, data);
  }

  //Suppression d'une colonne donnée
  deleteColumn(id: string): Observable<Column> {
    return this.http.delete<Column>(`${apiUrl}/columns/` + id);
  }

  //Création du card 
  addCard(data: Card): Observable<Card[]> {
    return this.http.post<Card[]>(`${apiUrl}/card`, data);
  }

  // Récupération des cards
  getCards(): Observable<Card[]> {
    return this.http.get<Card[]>(`${apiUrl}/card`);
  }

  // Récupération d'une card donnée
  getCard(id: string): Observable<Card> {
    return this.http.get<Card>(`${apiUrl}/card/` + id);
  }

  // Mise à jour d'une card donnée
  updateCard(id: string, data: Card): Observable<Card> {
    return this.http.put<Card>(`${apiUrl}/card/` + id, data);
  }
  
  //Suppression d'une cards donnée
  deleteCard(id: string): Observable<Card> {
    return this.http.delete<Card>(`${apiUrl}/card/` + id);
  }


}
