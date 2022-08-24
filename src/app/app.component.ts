import { Component, OnInit } from '@angular/core';
import { Article } from './domain/Article';
import { ArticleService } from './services/article.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public title = "MyShopFront";

  public listArticle: Article[];

  constructor(private service: ArticleService) {
    this.listArticle = [];
  }

  public ngOnInit(): void {
      this.service.getAll().subscribe(res => {
        this.listArticle = res;
      });
  }

}
