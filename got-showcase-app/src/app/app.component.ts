import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  houseType = '';
  title = 'got-showcase-app';

  constructor(private loc: Location,
              public router: Router) {
    this.houseType = window.localStorage.getItem('listType');
  }

  navigateBack() {
    this.loc.back();
  }
}
