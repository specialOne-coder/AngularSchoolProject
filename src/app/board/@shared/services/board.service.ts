import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/environments/environment';
import { Column } from '../models';

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


}
