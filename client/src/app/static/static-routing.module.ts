import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LecturesComponent } from './lectures/lectures.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleContentComponent } from './articles/article-content.component';
import { ContributeComponent } from './contribute/contribute.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { title: 'Home' } },
  { path: 'lectures', component: LecturesComponent, data: { title: 'Lectures' }},
  { path: 'articles', component: ArticlesComponent, data: { title: 'Articles'}},
  { path: 'articles/:id', component: ArticleContentComponent, data: { title: 'Articles'}},
  { path: 'contribute', component: ContributeComponent, data: { title: 'Contribute'}},
  { path: 'support', component: ContributeComponent, data: { title: 'Contribute'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticRoutingModule {}
