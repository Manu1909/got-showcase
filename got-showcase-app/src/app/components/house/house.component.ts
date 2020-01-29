import { Component, OnInit, Input } from '@angular/core';
import { RestApiService } from '../../services/rest-api.service';
import { House } from '../../models/house';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private loadHouse() {
  }

}
