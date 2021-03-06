import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';

import { MarkdownModule } from 'ngx-markdown';

import { StaticRoutingModule } from './static-routing.module';
import { HomeComponent } from './home/home.component';
import { LecturesComponent } from './lectures/lectures.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleContentComponent } from './articles/article-content.component';
import { ArticleEditorComponent } from './articles/article-editor.component';
import { ArticleSidebarComponent } from './articles/article-sidebar.component';
import { ContributeComponent } from './contribute/contribute.component';
import { SupportComponent } from './support/support.component';

import { ShareButtonsModule } from '@ngx-share/buttons';

import { ArticleService } from './articles/articles.service';

import { AceModule, AceConfigInterface, ACE_CONFIG } from 'ngx-ace-wrapper';

const DEFAULT_ACE_CONFIG: AceConfigInterface = {
  tabSize: 2
};

@NgModule({
  imports: [
    SharedModule,
    StaticRoutingModule,
    AceModule,
    MarkdownModule.forChild(),
    ShareButtonsModule.forRoot()
  ],
  declarations: [
    HomeComponent,
    LecturesComponent,
    ArticlesComponent,
    ArticleContentComponent,
    ArticleEditorComponent,
    ArticleSidebarComponent,
    ContributeComponent,
    SupportComponent
  ],
  providers: [ArticleService]
})
export class StaticModule {}
