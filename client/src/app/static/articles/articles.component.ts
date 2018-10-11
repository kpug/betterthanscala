import { Component, OnInit, Optional } from '@angular/core';
import { ArticleService, Article } from './articles.service';

import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'anms-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  articles: Array<Article>;

  constructor(private articleService: ArticleService,
    private route: ActivatedRoute) {}

  ngOnInit() {
    const { articles } = this.route.snapshot.data;
    this.articles = articles;
  }

}
