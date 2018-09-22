import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ArticleService } from './articles.service';

@Component({
  selector: 'anms-article-content',
  templateUrl: './article-content.component.html',
  styleUrls: ['./article-content.component.scss']
})
export class ArticleContentComponent implements OnInit {

  article = {
    title: '',
    content: ''
  }

  constructor(private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.articleService.getById(id).subscribe(response =>
      this.article = response
    )
  }
}
