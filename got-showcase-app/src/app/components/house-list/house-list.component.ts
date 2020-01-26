import { Component, OnInit } from '@angular/core';
import { House } from '../../models/house';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.scss']
})
export class HouseListComponent implements OnInit {

  houseList: House[];  

  constructor(public restApi: RestApiService) { }

  ngOnInit() {
    this.loadHouses();
  }

  private loadHouses() {
    this.restApi.getHouses().subscribe((data: House[]) => {
      this.houseList = data;
    });
  }

}
