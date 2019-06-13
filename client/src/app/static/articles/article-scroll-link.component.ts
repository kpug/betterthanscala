import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'anms-article-scroll-link',
  templateUrl: './article-scroll-link.component.html',
  styleUrls: []
})
export class ArticleScrollLinkComponent implements OnInit {
  link: string = 'http://localhost:4200/articles/1#22';
  ngOnInit() {
    // console.log('ngOnInit');
  }
}
