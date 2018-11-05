import { Component, OnInit, Optional } from '@angular/core';
import { ArticleService, Article } from './articles.service';

import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core';
import { ActivatedRoute } from '@angular/router';
import { convertPropertyBindingBuiltins } from '@angular/compiler/src/compiler_util/expression_converter';
import { FormArrayName } from '@angular/forms';
import * as _ from 'lodash';
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
  pageIndexes;

  constructor(private articleService: ArticleService,
    private route: ActivatedRoute) {
    }

  ngOnInit() {
    const [articles, totalCount] = this.route.snapshot.data.response;
    const countPerPage = 5;
    const totalPages = Math.ceil(totalCount / countPerPage);

    this.articles = articles;
    this.pages = this.getPages();
    this.start = this.calcStartPages(this.pages, totalPages);
    this.end = this.calcEndPages(this.pages, totalPages);
    this.pageIndexes = _.range(this.start, this.end + 1);
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
      return total / 5;
    } else {
      return pages + 2;
    }
  }

  /**
   * onClick: 이전 버튼
   */
  onClickPreviousArrow() {
    this.pageIndexes = _.range(this.start, this.end + 1);
  }

  /**
   * onClick: 다음 버튼
   */
  onClickNextArrow() {
    this.start = this.start + 5;
    this.end = this.end + 5;
    this.pageIndexes = _.range(this.start, this.end + 1);
  }

  /**
   * onClick: 페이징 숫자
   * @param number
   */
  onClickReloadPage(number) {
    console.log(number);
  }

}
