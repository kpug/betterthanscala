import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';

import { StaticRoutingModule } from './static-routing.module';
import { AboutComponent } from './about/about.component';
import { LecturesComponent } from './lectures/lectures.component';
import { ArticlesComponent } from './articles/articles.component';
import { ContributeComponent } from './contribute/contribute.component';
import { SupportComponent } from './support/support.component';

@NgModule({
  imports: [SharedModule, StaticRoutingModule],
  declarations: [AboutComponent, LecturesComponent, ArticlesComponent, ContributeComponent, SupportComponent]
})
export class StaticModule {}
