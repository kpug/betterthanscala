import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouteReuseStrategy } from '@angular/router';
import { ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';

import { ArticleContentComponent } from './static/articles/article-content.component';

import { SettingsComponent } from './settings';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  // {
  //   path: 'settings',
  //   component: SettingsComponent,
  //   data: {
  //     title: 'Settings'
  //   }
  // },
  // {
  //   path: 'examples',
  //   loadChildren: 'app/examples/examples.module#ExamplesModule'
  // },
  {
    path: '**',
    redirectTo: 'home'
  }
];

export class CustomReuseStrategy implements RouteReuseStrategy {

  handlers: { [key: string]: DetachedRouteHandle } = {};

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return false;
  }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    this.handlers[route.routeConfig.path] = handle;
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return !!route.routeConfig && !!this.handlers[route.routeConfig.path];
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    if (!route.routeConfig) {
      return null;
    }
    return this.handlers[route.routeConfig.path];
  }

  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return future.routeConfig === curr.routeConfig && curr.component !== ArticleContentComponent;
  }
}

@NgModule({
  // useHash supports github.io demo page, remove in your app
  imports: [RouterModule.forRoot(routes)],
  providers: [{
    provide: RouteReuseStrategy,
    useClass: CustomReuseStrategy
  }],
  exports: [RouterModule]
})
export class AppRoutingModule { }
