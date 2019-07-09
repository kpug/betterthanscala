import { Component, ViewChild } from '@angular/core';

import { Article, ArticleService } from './articles.service';

import 'brace';
import 'brace/mode/text';
import 'brace/theme/github';

import {
  AceComponent,
  AceDirective,
  AceConfigInterface
} from 'ngx-ace-wrapper';

@Component({
  selector: 'anms-article-editor',
  templateUrl: './article-editor.component.html',
  styleUrls: ['./article-editor.component.scss']
})
export class ArticleEditorComponent {
  public config: AceConfigInterface = {
    mode: 'text',
    theme: 'github',
    readOnly: false
  };

  public value: string;

  constructor(private articleService: ArticleService) {
  }

  onSaveClick() {
    const article = new Article();
    article.title = '';
    article.content = '';
    article.author = 'lawrence';
    article.tags = [''];
    this.articleService.save$(article).subscribe();
  }

  onCancelClick() {
    console.log('cancel');
  }

  onImageUpload() {
    console.log('image upload');
  }
}
