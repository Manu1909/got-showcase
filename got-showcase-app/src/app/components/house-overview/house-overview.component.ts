import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-house-overview',
  templateUrl: './house-overview.component.html',
  styleUrls: ['./house-overview.component.scss']
})
export class HouseOverviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.localStorage.setItem('listType', '');
  }

  public addTypeLocalStorage(type: string) {
    window.localStorage.setItem('listType', type);
  }

}
