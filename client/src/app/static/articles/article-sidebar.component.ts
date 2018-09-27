import { Component, OnInit } from '@angular/core';

import { ArticleService, Article } from './articles.service';

@Component({
  selector: 'anms-article-sidebar',
  templateUrl: './article-sidebar.component.html',
  styleUrls: ['./article-sidebar.component.scss']
})
export class ArticleSidebarComponent implements OnInit {

  articles: Array<Article>

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.get().subscribe(response =>
      this.articles = response
    )
  }

}
