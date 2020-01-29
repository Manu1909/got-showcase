import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestApiService } from 'src/app/services/rest-api.service';
import { House } from 'src/app/models/house';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.scss']
})
export class HouseDetailComponent implements OnInit {

  house: House;

  constructor(public actRoute: ActivatedRoute,
              public restApi: RestApiService) {
   }

  ngOnInit() {
    let id = this.actRoute.snapshot.params['id'];
    this.loadHouseDetails(id);
  }

  private loadHouseDetails(id: number) {
    this.restApi.getHouseById(id).subscribe((val: House) => {
      this.house = val;
    });
  }

}
