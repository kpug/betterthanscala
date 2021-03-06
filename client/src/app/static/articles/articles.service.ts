import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

export class Article {
  id: number;
  title: string;
  content: string;
  createdAt: object;
  updatedAt: object;
  author: string;
  tags: Array<string>;
}

@Injectable()
export class ArticleService {

  apiUrl = `${environment.api.host}/api/article`;

  constructor(private httpClient: HttpClient) { }

  get$(count: number = 5, pages: number = 1): Observable<HttpResponse<Article[]>> {
    return this.httpClient.get<Article[]>(this.apiUrl, {
      params: {
        count: String(count),
        pages: String(pages)
      },
      observe: 'response'
    });
  }

  getByTag$(tag, count: number = 5, pages: number = 1): Observable<HttpResponse<Article[]>> {
    return this.httpClient.get<Article[]>(`${this.apiUrl}/tags/${tag}`, {
      params: {
        tag: String(tag),
        count: String(count),
        pages: String(pages)
      },
      observe: 'response'
    });
  }

  getById$(id): Observable<Article> {
    return this.httpClient.get<Article>(`${this.apiUrl}/${id}`);
  }

  save$(article): Observable<Article> {
    return this.httpClient.post<Article>(`${this.apiUrl}`, article);
  }
}
