import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ArticleService, Article } from './articles.service';

import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core';

import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { convertPropertyBindingBuiltins } from '@angular/compiler/src/compiler_util/expression_converter';
import { FormArrayName } from '@angular/forms';
import * as _ from 'lodash';
import { callLifecycleHooksChildrenFirst } from '@angular/core/src/view/provider';
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
  navigationSubscription;
  countPerPage: number = 5;
  init: boolean = false;

  constructor(private articleService: ArticleService,
    private route: ActivatedRoute,
    private router: Router) {
    const [articles, totalCount] = [this.route.snapshot.data.response[0], this.route.snapshot.data.response[1]];
    this.articles = articles;
    let values = this.route.snapshot.queryParams;

    this.totalPages = Math.ceil(totalCount / this.countPerPage);

    this.pages = Number.isNaN(+values.pages) ? 1 : +values.pages;
    this.articles = articles;

    this.currentIndex = Math.floor((this.pages - 1) / 5);

    const startPages: number = this.currentIndex * 5 + 1;
    const endPages: number = Math.min(startPages + 5, this.totalPages);

    this.pageIndexes = _.range(startPages, endPages + 1);

    this.route.params.subscribe((values) => {
      if (!this.init) return false;
      let result;
      if (values.hasOwnProperty('tag')) {
        result = this.articleService.getByTag$(values.tag, this.countPerPage, values.pages);
      } else {
        result = this.articleService.get$(this.countPerPage, values.pages);
      }
      result.subscribe(resp => {
          const [articles, totalCount] = [resp.body, +resp.headers.get('x-total-count')];
          this.articles = articles;

          this.totalPages = Math.ceil(totalCount / this.countPerPage);

          this.pages = Number.isNaN(+values.pages) ? 1 : +values.pages;
          this.articles = articles;

          this.currentIndex = Math.floor((this.pages - 1) / 5);

          const startPages: number = this.currentIndex * 5 + 1;
          const endPages: number = Math.min(startPages + 5, this.totalPages);

          this.pageIndexes = _.range(startPages, endPages + 1);
        });
    });
  }

  // initialiseInvites() {
  // }

  ngOnInit() {
    this.init = true;
    console.log('first');
    // const [articles, totalCount] = this.route.snapshot.data.response;
    // const countPerPage = 5;
    // this.totalPages = Math.ceil(totalCount / countPerPage);

    // this.totalPages = 5;

    // this.articles = articles;
    // this.pages = this.getPages(this.totalPages);
    // this.currentIndex = Math.floor((this.pages - 1) / 5);

    // const startPages = this.currentIndex * 5 + 1;
    // const endPages = Math.min(startPages + 5, this.totalPages);

    // this.pageIndexes = _.range(startPages, endPages + 1);
  }

  // ngOnDestroy() {
  //   if (this.navigationSubscription) {
  //     this.navigationSubscription.unsubscribe();
  //   }
  // }

  // getPages(totalPages) {
  //   const pages = +this.route.snapshot.queryParams.pages;
  //   if (Number.isNaN(pages)) {
  //     return 1;
  //   } else if (pages === totalPages) {
  //     return totalPages;
  //   } else {
  //     return pages;
  //   }
  // }

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
    const tag = this.route.snapshot.params.tag;

    if (tag === undefined) {
      this.router.navigate(['/articles', { pages: number }]);
    } else {
      this.router.navigate(['/articles', { pages: number, tag: this.route.snapshot.params.tag }]);
    }
  }

  /**
   * onClick: tag
   */
  onClickTag(event, tag) {
    event.preventDefault();
    this.router.navigate(['/articles', { tag: tag }]);
  }

}
