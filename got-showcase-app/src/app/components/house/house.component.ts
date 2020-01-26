import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../../services/rest-api.service';
import { House } from '../../models/house';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent implements OnInit {

  house: House;
  id: number;

  constructor(public restApi: RestApiService) { }

  ngOnInit() {
    this.loadHouse();
  }

  private loadHouse() {
    return this.restApi.getHouseById(this.id).subscribe((data: House) => {
      this.house = data;
    });
  }

}
