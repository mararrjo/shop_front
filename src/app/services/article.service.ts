import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Article, IArticle } from "../domain/Article";

@Injectable({
  providedIn: "root"
})
export class ArticleService {

  private API_BASE = "http://localhost:8080/";

  constructor(private http: HttpClient) {}

  public getAll(): Observable<Article[]> {
    return this.http.get<IArticle[]>(`${this.API_BASE}article`)
      .pipe(
        map(data => {
          return data.map(d => new Article(d));
        })
      );
  }

}
