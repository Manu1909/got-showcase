import { Component, OnInit } from '@angular/core';
import { House } from '../../models/house';
import { RestApiService } from 'src/app/services/rest-api.service';

const mainHousesRepo = [
  'Bronn',
  'Arryn',
  'Baratheon',
  'Greyjoy'
]


@Component({
  selector: 'app-main-house-list',
  templateUrl: './main-house-list.component.html',
  styleUrls: ['./main-house-list.component.scss']
})
export class MainHouseListComponent implements OnInit {

  mainHouses: House[] = [];
 
  constructor(private restApi: RestApiService) { }

  ngOnInit() {
    this.loadHouses();
  }

  private loadHouses() {
    
  }

}
