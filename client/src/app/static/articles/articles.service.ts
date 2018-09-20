import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable()
export class ArticleService {

  apiUrl: string = `${environment.api.host}/api/article`;

  constructor(private httpClient: HttpClient) {}

  get(){
    return this.httpClient.get(this.apiUrl)
  }

  getById(id){
    return this.httpClient.get(`${this.apiUrl}/${id}`)
  }
}