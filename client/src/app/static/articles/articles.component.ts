import { Component, OnInit, Optional } from '@angular/core';
import { ArticleService } from './articles.service';

@Component({
  selector: 'anms-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  articles

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.get().subscribe(data => {
      this.articles = data
    })
  }
}