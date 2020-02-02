import { Component, OnInit } from '@angular/core';
import { House } from '../../models/house';
import { RestApiService } from '../../../app/services/rest-api.service';

@Component({
  selector: 'app-small-house-list',
  templateUrl: './small-house-list.component.html',
  styleUrls: ['./small-house-list.component.scss']
})
export class SmallHouseListComponent implements OnInit {

  houses: House[];  
  houseName: string;

  constructor(public restApi: RestApiService) { }

  ngOnInit() {
    this.loadHouses();
  }

  private loadHouses() {
    this.restApi.getHouses().subscribe((data: House[]) => {
      this.houses = [...data];
    });
  }

}
