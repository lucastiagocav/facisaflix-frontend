export interface ListaFilmesModel {
  id: number;
  filme: string;
  categoria: string;
  descricao: string;
  like?: boolean;
  deslike?: boolean;

}
