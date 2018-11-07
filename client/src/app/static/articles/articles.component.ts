import { Component, OnInit, Optional } from '@angular/core';
import { ArticleService, Article } from './articles.service';

import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  currentIndex: number;
  pageIndexes: Array<number>;
  totalPages: number;

  constructor(private articleService: ArticleService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const [articles, totalCount] = this.route.snapshot.data.response;
    const countPerPage = 5;
    this.totalPages = Math.ceil(totalCount / countPerPage);

    // for test
    // this.totalPages = 6;

    this.articles = articles;
    this.pages = this.getPages(this.totalPages);
    this.currentIndex = Math.floor((this.pages - 1) / 5);
    const startPages = this.currentIndex * 5 + 1;
    const endPages = Math.min(startPages + 5, this.totalPages);
    this.pageIndexes = _.range(startPages, endPages);
    console.log(this.totalPages);
  }

  getPages(totalPages) {
    const pages = +this.route.snapshot.queryParams.pages;
    if (Number.isNaN(pages)) {
      return 1;
    } else if (pages === totalPages) {
      return totalPages;
    } else {
      return pages;
    }
  }

  // calcStartPages(pages: number, total: number) {
  //   if (total <= 5) {
  //     return 1;
  //   } else if (pages <= 2) {
  //     return 1;
  //   } else if (pages >= total - 1) {
  //     return total - 4;
  //   } else {
  //     return pages - 2;
  //   }
  // }

  // calcEndPages(pages: number, total: number) {
  //   if (total <= 5) {
  //     return total;
  //   } else if (pages <= 2) {
  //     return 5;
  //   } else if (pages >= total - 1) {
  //     return total / 5;
  //   } else {
  //     return pages + 2;
  //   }
  // }

  /**
   * onClick: 이전 버튼
   */
  onClickPreviousArrow() {
    if (this.currentIndex === 0) { return; }
    this.currentIndex--;
    const startPages = this.currentIndex * 5 + 1;
    const endPages = Math.min(startPages + 5, this.totalPages + 1);
    this.pageIndexes = _.range(startPages, endPages);
  }

  /**
   * onClick: 다음 버튼
   */
  onClickNextArrow() {
    if (((this.currentIndex + 1) * 5 + 1) > this.totalPages) { return; }
    this.currentIndex++;
    const startPages = this.currentIndex * 5 + 1;
    const endPages = Math.min(startPages + 5, this.totalPages + 1);
    this.pageIndexes = _.range(startPages, endPages);
  }

  /**
   * onClick: 페이징 숫자
   * @param number
   */
  onClickReloadPage(number) {
    this.router.navigate(['/articles', { pages: number }]);
  }

}
