import { Component } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core';
import { link } from 'fs';

export interface UserProfile {
  img: string;
  name: string;
  link: string;
}

@Component({
  selector: 'anms-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  releaseButler = require('../../../assets/release-butler.png');

  backers: UserProfile[] = [
    {
      img: 'https://avatars0.githubusercontent.com/u/472116?s=460&v=4',
      name: 'Joseph',
      link: 'https://github.com/orgs/kpug/people/before30'
    },
    {
      img: 'https://avatars1.githubusercontent.com/u/4495200?s=460&v=4',
      name: 'Lawrence',
      link: 'https://github.com/pr-lawrence'
    }
  ];

  constructor() {}
}
