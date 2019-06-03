import { map } from 'rxjs/operators';
import { Component, OnInit, OnDestroy, Optional } from '@angular/core';
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
export class ArticlesComponent implements OnInit, OnDestroy {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  articles: Array<Article>;
  pages: number;
  currentIndex: number;
  pageIndexes: Array<number>;
  totalPages: number;
  navigationSubscription;

  constructor(private articleService: ArticleService,
    private route: ActivatedRoute,
    private router: Router) {

    this.route.params.subscribe((values) => {
        const [articles, totalCount] = this.route.snapshot.data.response;

        const countPerPage = 5;
        this.totalPages = Math.ceil(totalCount / countPerPage);

        this.pages = Number.isNaN(+values.pages) ? 1 : +values.pages;
        this.articles = articles;

        this.currentIndex = Math.floor((this.pages - 1) / 5);

        const startPages = this.currentIndex * 5 + 1;
        const endPages = Math.min(startPages + 5, this.totalPages);

      this.pageIndexes = _.range(startPages, endPages + 1);
      this.call(values);
      });
    }

  // initialiseInvites() {
  // }
  call(values) {
    this.articleService.get$(5, values.pages)
    .subscribe(resp => {
      const result: [Article[], number] = [resp.body, +resp.headers.get('x-total-count')];
      this.articles = result[0];
    });
  }

  ngOnInit() {
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
