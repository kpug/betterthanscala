import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'anms-article-content',
  templateUrl: './article-content.component.html',
  styleUrls: ['./article-content.component.css']
})
export class ArticleContentComponent implements OnInit {

  title = '스칼라 언어 사용하기'
  
  content = `# hello world
  | a | b | c | d |
  |---|---|---|---|
  | e | f | g | h |`

  constructor() { }

  ngOnInit() {
  }

}
