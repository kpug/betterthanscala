import { Component, OnInit, OnDestroy} from '@angular/core';

import { ActivatedRoute, Router, ParamMap, NavigationStart, NavigationEnd } from '@angular/router';
import { ArticleService, Article } from './articles.service';
import { MarkdownService } from 'ngx-markdown';

import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core';

@Component({
  selector: 'anms-article-content',
  templateUrl: './article-content.component.html',
  styleUrls: ['./article-content.component.scss']
})
export class ArticleContentComponent implements OnInit, OnDestroy {

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  article: Article = new Article();
  navigationSubscription;
  markdown;

  tableOfContent: Array<string> = new Array<string>();
  activeIndex: number = 0;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService,
  private markdownService: MarkdownService) {

    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
    });
  }

  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true);
  }

  scroll = () => {
    this.activeIndex = this.tableOfContent.map(x => x[0])
      .map((c) => document.querySelector(`#${c}`))
      .map(el => el.getBoundingClientRect())
      .findIndex((x) => x.top > 63);
  }

  initialiseInvites() {
    // // console.log('here')
    const id = +this.route.snapshot.paramMap.get('id');
    this.articleService.getById$(id).subscribe(response => {
      this.article = response;
      this.markdown = this.markdownService.compile(this.article.content);
      const htmlObject = document.createElement('div');
      htmlObject.innerHTML = this.markdown;
      for (let i = 0; i < htmlObject.children.length; i++) {
        let tag = htmlObject.children[i].tagName;
        if (['H1', 'H2', 'H3'].includes(tag)) {
          this.tableOfContent.push([ htmlObject.children[i].id, tag]);
        }
      }
    });
  }


  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
    window.removeEventListener('scroll', this.scroll, true);
  }

  onClickTag(event, tag) {
    event.preventDefault();
    this.router.navigate(['/articles', { tag: tag }]);
  }

  scrollToElement(target) {
    try {
      const element = document.querySelector(`#${target}`);
      if ( element ) {
        element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
      }
    } finally {
      return false;
    }
  }
}
