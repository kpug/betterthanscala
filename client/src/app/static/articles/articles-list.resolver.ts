import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Article, ArticleService } from './articles.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ArticlesListResolver implements Resolve<Article[]> {

  constructor(private articleService: ArticleService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Article[]> {
    return this.articleService.get();
  }
}
