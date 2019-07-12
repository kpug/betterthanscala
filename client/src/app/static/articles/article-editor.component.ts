import { Component, ViewChild, Input } from '@angular/core';

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

  @Input()
  public title: string;

  @Input()
  public content: string;

  @Input()
  public tags: string;

  constructor(private articleService: ArticleService) {
  }

  onSaveClick() {
    const article = new Article();
    article.title = this.title;
    article.content = this.content;
    article.tags = this.tags.split(',');
    article.author = 'lawrence';
    this.articleService.save$(article).subscribe();
  }

  onCancelClick() {
    if ((this.title !== '' || this.content !== '' || this.tags !== '') && !confirm('수정사항이 있습니다. 취소하시겠습니까?')) {
    } else {
      history.back();
    }
  }

  onImageUpload() {
    console.log('image upload');
  }
}
