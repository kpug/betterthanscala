
import { ParentComponent } from './../../examples/theming/parent/parent.component';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShareButtons } from '@ngx-share/core';
import { MarkdownService } from 'ngx-markdown';
import * as _ from 'lodash';

import { ArticleService, Article } from './articles.service';

@Component({
  selector: 'anms-article-sidebar',
  templateUrl: './article-sidebar.component.html',
  styleUrls: ['./article-sidebar.component.scss']
})
export class ArticleSidebarComponent implements OnInit {

  id: Number;

  @Input()
  isShare = false;

  @Input()
  isContent = false;

  private _content = '';

  @Input()
  set content(content: string) {
    if (content === undefined) { return; }
    this._content = content;
    // const element = document.createRange().createContextualFragment(this._content);
    // from(element);
  }

  get content(): string { return this._content; }

  // @Input()
  // set content(content: string) {
  //   if (content === undefined) { return; }
  //   this._content = this.markdownService.compile(content);
  //   console.log(this._content);
  //   const element = document.createRange().createContextualFragment(this._content);
  //   // from(element);
  // }

  // get content(): string { return this._content; }

  articles: Array<Article>;

  constructor(private route: ActivatedRoute,
    private articleService: ArticleService,
    private markdownService: MarkdownService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');

    this.articleService.get$().subscribe(response =>
      this.articles = response.body
    );
  }
}
