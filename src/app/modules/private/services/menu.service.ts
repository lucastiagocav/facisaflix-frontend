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

  buscarFilme(queryParams): Observable<ListaFilmesModel> {
    return this.http.get<ListaFilmesModel>(`${this.url}/filmes/buscar`, {
      params: this.httpParamsByObjeto(queryParams)
    });
  }

  httpParamsByObjeto(objeto: object): {
    [param: string]: string | string[]
  } {
    const httpParams: {
      [param: string]: string | string[];
    } = {};
    if (objeto != null) {
      // tslint:disable-next-line:forin
      for (const key in objeto) {
        const parametro = objeto[key];
        if (parametro !== null && parametro !== 'null' && parametro !== 'undefined' && parametro !== undefined) {
          if (String(parametro).trim()) {
            httpParams[key] = String(objeto[key]);
          }
        }
      }
    }
    return httpParams;
  }

}
