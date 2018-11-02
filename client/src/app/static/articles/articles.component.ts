import { Component, OnInit, Optional } from '@angular/core';
import { ArticleService, Article } from './articles.service';

import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core';
import { ActivatedRoute } from '@angular/router';
import { convertPropertyBindingBuiltins } from '@angular/compiler/src/compiler_util/expression_converter';

@Component({
  selector: 'anms-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  articles: Array<Article>;

  constructor(private articleService: ArticleService,
    private route: ActivatedRoute) {
      const pages = +this.route.snapshot.queryParams.pages;
    }

  ngOnInit() {
    const { articles } = this.route.snapshot.data;
    this.articles = articles;
  }

  previousClick() {
    console.log('previous Click');
  }

  nextClick() {
    console.log('next Click');
  }

  loadPage(number) {
    console.log(number);
  }

}
