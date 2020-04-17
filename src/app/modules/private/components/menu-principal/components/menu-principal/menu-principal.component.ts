import { Component, OnInit } from '@angular/core';
import { ListaFilmesModel } from 'src/app/modules/private/models/lista-filmes.model';
import { MenuService } from 'src/app/modules/private/services/menu.service';

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
  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.recoveryFilmlist();
  }

  recoveryFilmlist() {
    this.menuService.recuperarFilmes().subscribe(lista => {
      this.listaFilmes = lista;
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

  recoveryAllFilms() {

  }

}
