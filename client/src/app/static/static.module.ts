import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';

import { MarkdownModule } from 'ngx-markdown';

import { StaticRoutingModule } from './static-routing.module';
import { HomeComponent } from './home/home.component';
import { LecturesComponent } from './lectures/lectures.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleContentComponent } from './articles/article-content.component';
import { ContributeComponent } from './contribute/contribute.component';
import { SupportComponent } from './support/support.component';

@NgModule({
  imports: [
    SharedModule,
    StaticRoutingModule,
    MarkdownModule.forChild()
  ],
  declarations: [HomeComponent, LecturesComponent, ArticlesComponent, ArticleContentComponent, ContributeComponent, SupportComponent]
})

export class StaticModule { }