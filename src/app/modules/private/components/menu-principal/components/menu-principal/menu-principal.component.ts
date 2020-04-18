import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ListaFilmesModel } from 'src/app/modules/private/models/lista-filmes.model';
import { MenuService } from 'src/app/modules/private/services/menu.service';
import { FilmUtils } from 'src/app/modules/private/utils/film-utils';

@Component({
  selector: 'app-menu',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {
  descricaoFilme: string = 'Isolado, intimidado e desconsiderado pela sociedade, o fracassado comediante Arthur Fleck inicia seu caminho como uma mente criminosa após assassinar três homens em pleno metrô. Sua ação inicia um movimento popular contra a elite de Gotham City, da qual Thomas Wayne é seu maior representante.';
  categoria: string = 'Ação e Suspense';
  clickLike: boolean = false;
  clickDeslike: boolean = false;


  listaFilmes: Array<ListaFilmesModel>;
  listaRecomendacoes: Array<ListaFilmesModel>;
  listaPesquisa: Array<ListaFilmesModel>;
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

  get searchValue() {
    return this.searchForm.get('search').value;
  }

  recoverAllFilms() {
    // this.spinner.show();
    // this.menuService.recuperarFilmes().subscribe(lista => {
    //   this.listaFilmes = lista;
    //   this.spinner.hide();
    // }, error => {
    //   this.spinner.hide();

    // });

    this.listaFilmes = FilmUtils.listaFilme();
  }

  filmSearch() {
    // this.spinner.show();
    // this.menuService.buscarFilme(this.searchValue).subscribe(listaFilmes => {
    //   this.listaPesquisa = listaFilmes;
    //   this.spinner.hide();
    // }, error => {
    //   this.spinner.hide();
    // });

    this.listaPesquisa = FilmUtils.listaFilme();
  }

  likeFilm() {
    this.clickLike = true;
    this.clickDeslike = false;
    this.listaRecomendacoes = FilmUtils.listaFilme();
  }

  deslikeFilm() {
    this.clickDeslike = true;
    this.clickLike = false;
  }

}
