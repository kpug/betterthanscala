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
  pages: number;
  start: number;
  end: number;

  constructor(private articleService: ArticleService,
    private route: ActivatedRoute) {
    }

  ngOnInit() {
    const [articles, total] = this.route.snapshot.data.response;
    this.articles = articles;
    this.pages = this.getPages();
    this.start = this.calcStartPages(this.pages, total);
    this.end = this.calcEndPages(this.pages, total);
    console.log(this.pages, this.start, this.end);
  }


  getPages() {
    const pages = +this.route.snapshot.queryParams.pages;
    return Number.isNaN(pages) ? 1 : pages;
  }

  calcStartPages(pages: number, total: number) {
    if ( total <= 5 ) {
      return 1;
    } else if (pages <= 2) {
      return 1;
    } else if (pages >= total - 1 ) {
      return total - 4;
    } else {
      return pages - 2;
    }
  }

  calcEndPages(pages: number, total: number) {
    if ( total <= 5 ) {
      return total;
    } else if (pages <= 2) {
      return 5;
    } else if ( pages >= total - 1 ) {
      return total;
    } else {
      return pages + 2;
    }
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
