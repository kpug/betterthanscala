import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class ImageUploaderService {

  apiUrl = `${environment.api.host}/image/upload`;

  constructor(private httpClient: HttpClient) { }

  upload$(file: File) {
    const uploadData = new FormData();
    uploadData.append('picture', file, file.name);
    return this.httpClient.post(`${this.apiUrl}`, uploadData);
  }
}
