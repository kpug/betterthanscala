import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

export class Article {
  id: number;
  title: string;
  content: string;
  date: object;
  author: string;
  category: Array<string>;
}

@Injectable()
export class ArticleService {

  apiUrl: string = `${environment.api.host}/api/article`;

  constructor(private httpClient: HttpClient) { }

  get(): Observable<Article[]> {
    return this.httpClient.get<Article[]>(this.apiUrl);
  }

  getById(id): Observable<Article> {
    return this.httpClient.get<Article>(`${this.apiUrl}/${id}`);
  }
}
