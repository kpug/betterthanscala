import { Component, OnInit, Input } from '@angular/core';
import { ShareButtons } from '@ngx-share/core';

import { ArticleService, Article } from './articles.service';

@Component({
  selector: 'anms-article-sidebar',
  templateUrl: './article-sidebar.component.html',
  styleUrls: ['./article-sidebar.component.scss']
})
export class ArticleSidebarComponent implements OnInit {

  @Input()
  isShare: boolean = false;

  articles: Array<Article>;

  constructor(private articleService: ArticleService
    , private share: ShareButtons) { }

  ngOnInit() {
    this.articleService.get().subscribe(response =>
      this.articles = response
    );
  }

}
