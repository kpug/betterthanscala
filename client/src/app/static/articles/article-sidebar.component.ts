import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShareButtons } from '@ngx-share/core';

import { ArticleService, Article } from './articles.service';

@Component({
  selector: 'anms-article-sidebar',
  templateUrl: './article-sidebar.component.html',
  styleUrls: ['./article-sidebar.component.scss']
})
export class ArticleSidebarComponent implements OnInit {

  id: Number;

  @Input()
  isShare = false;

  articles: Array<Article>;

  constructor(private route: ActivatedRoute,
      private articleService: ArticleService,
      private share: ShareButtons) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');

    this.articleService.get$().subscribe(response =>
      this.articles = response.body
    );
  }

}
