import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ListaFilmesModel } from 'src/app/modules/private/models/lista-filmes.model';
import { MenuService } from 'src/app/modules/private/services/menu.service';
import { SearchModel } from 'src/app/modules/private/models/search.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {
  clickLike: boolean = false;
  clickDeslike: boolean = false;

  listaFilmes: Array<ListaFilmesModel>;
  listaRecomendacoes: Array<ListaFilmesModel>;
  itemRecuperado: ListaFilmesModel;
  searchForm: FormGroup;
  constructor(private menuService: MenuService, private spinner: NgxSpinnerService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
    this.recoverAllFilms();
  }

  createForm() {
    this.searchForm = this.formBuilder.group({
      search: ['']
    });
  }

  get searchMapper(): SearchModel {
    const params: SearchModel = this.searchForm.getRawValue();
    params.search = params.search.trim().toUpperCase();
    return params;
  }

  recoverAllFilms() {
    this.spinner.show();
    this.menuService.recuperarFilmes().subscribe(lista => {
      this.listaFilmes = lista;
      this.spinner.hide();
    }, error => {
      this.spinner.hide();
    });
  }

  filmSearch() {
    this.spinner.show();
    this.menuService.buscarFilme(this.searchMapper).subscribe(filmeRecuperado => {
      this.itemRecuperado = filmeRecuperado;
      this.spinner.hide();
    }, error => {
      this.spinner.hide();
    });
  }

  likeFilm() {
    this.clickLike = true;
    this.clickDeslike = false;
  }

  deslikeFilm() {
    this.clickDeslike = true;
    this.clickLike = false;
  }
}
