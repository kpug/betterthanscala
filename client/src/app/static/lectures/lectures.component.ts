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
      name: 'Scala',
      version: '2.12.6',
      content: '스칼라는 객체 지향 프로그래밍 언어와 함수형 프로그래밍의 요소가 결합된 다중패러다임 프로그래밍 언어입니다.',
      github: '',
      docs: ''
    },
    // {
    //   name: 'Akka',
    //   version: '1.0.0',
    //   content: 'blabla',
    //   github: '',
    //   docs: ''
    // },
  ]

  ngOnInit() {}

  openLink(link: string) {
    window.open(link, '_blank');
  }
}