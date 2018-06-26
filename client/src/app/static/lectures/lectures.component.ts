import { Component, OnInit } from '@angular/core';

import { environment as env } from '@env/environment';
import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core';

@Component({
  selector: 'anms-lectures',
  templateUrl: './lectures.component.html',
  styleUrls: ['./lectures.component.scss']
})
export class LecturesComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  versions = env.versions;

  lectures = [
    {
      name: 'Play framework',
      version: '1.0.0',
      content: 'blabla',
      github: '',
      docs: ''
    },
    {
      name: 'Akka',
      version: '1.0.0',
      content: 'blabla',
      github: '',
      docs: ''
    },
  ]

  ngOnInit() {}

  openLink(link: string) {
    window.open(link, '_blank');
  }
}