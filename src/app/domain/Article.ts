export interface IArticle {
  id: number;
  nombre: string;
  precio: number;
  stock: number;
  creacion: Date;
}

export class Article {
  public id: number;
  public nombre: string;
  public precio: number;
  public stock: number;
  public creacion: Date;

  constructor(data: IArticle) {
    return Object.assign(this, data);
  }
}
