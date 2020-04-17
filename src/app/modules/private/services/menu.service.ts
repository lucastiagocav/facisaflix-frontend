import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListaFilmesModel } from '../models/lista-filmes.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  url = environment.urlDefault;
  constructor(private http: HttpClient) { }

  recomendarFilme(idnCategoria: string): Observable<ListaFilmesModel[]> {
    return this.http.get<ListaFilmesModel[]>(`${this.url}/recomendacoes/${idnCategoria}`);
  }

  recuperarFilmes(): Observable<ListaFilmesModel[]> {
    return this.http.get<ListaFilmesModel[]>(`${this.url}/filmes/`);
  }
}
