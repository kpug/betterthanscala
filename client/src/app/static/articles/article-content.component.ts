import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute, Router, ParamMap, NavigationStart, NavigationEnd } from '@angular/router';
import { ArticleService, Article } from './articles.service';

@Component({
  selector: 'anms-article-content',
  templateUrl: './article-content.component.html',
  styleUrls: ['./article-content.component.scss']
})
export class ArticleContentComponent implements OnInit, OnDestroy {

  article: Article
  navigationSubscription

  constructor(private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
    });
  }

  ngOnInit() {
  }

  initialiseInvites() {
    // // console.log('here')
    const id = +this.route.snapshot.paramMap.get('id')
    this.articleService.getById(id).subscribe(response => {
      this.article = response
    })
  }


  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

}
