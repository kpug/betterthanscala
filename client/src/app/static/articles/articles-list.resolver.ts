import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Article, ArticleService } from './articles.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

@Injectable()
export class ArticlesListResolver implements Resolve<[Article[], number]> {

  constructor(private articleService: ArticleService) { }

  articles: Article[];
  headers;

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<[Article[], number]> {
    return this.articleService.get$()
      .pipe(map((resp) => {
        const result: [Article[], number] = [resp.body, +resp.headers.get('x-total-count')];
        return result;
      }));
  }

}
