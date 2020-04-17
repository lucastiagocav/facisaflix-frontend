import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ListaFilmesModel } from '../models/lista-filmes.model';

@Injectable({
  providedIn: 'root'
})
export class FacisaflixService {
  url = environment.urlDefault;
  constructor(private http: HttpClient) { }

  buscarFilme(query: object): Observable<ListaFilmesModel[]> {
    return this.http.get<ListaFilmesModel[]>(`${this.url}/buscar-filme/${query}`);
  }
}
