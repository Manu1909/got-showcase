import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'got-showcase-app';

  constructor(private loc: Location) {
  }

  navigateBack() {
    this.loc.back();
  }
}
