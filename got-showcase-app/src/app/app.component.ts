import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { state, trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
     trigger('openClose', [
      state('open', style({
        overflow: 'hidden',
        height: '*',
        opacity: 1
      })),
      state('closed', style({
        height: '0px',
        opacity: 0,
        overflow: 'hidden'
      })),
      transition('open => closed', [
        animate('0.5s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
     ])
  ]
})
export class AppComponent {
  houseType = '';
  title = 'got-showcase-app';
  isOpen = true;

  constructor(private loc: Location,
              public router: Router) {
    this.houseType = window.localStorage.getItem('listType');
  }

  navigateBack() {
    this.loc.back();
  }

  moveLeadText() {
    this.isOpen = !this.isOpen;
  }
}
