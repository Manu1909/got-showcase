import { Component, OnInit, Input } from '@angular/core';
import { RestApiService } from '../../services/rest-api.service';
import { House } from '../../models/house';
import { BehaviorSubject } from 'rxjs';

const mainHouses = [7, 15, 16, 17, 34, 62, 109, 143, 145, 169, 196, 214, 229, 274, 362, 378, 395, 398];
const pageCounter = 10;
const staticRegions = [
                 'The North',
                 'The Vale',
                 'The Riverlands',
                 'The Westerlands',
                 'Iron Islands',
                 'The Crownlands',
                 'The Stormlands',
                 'The Reach',
                 'Dorne'
                ];

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.scss']
})
export class HouseListComponent implements OnInit {

  @Input() houseType: string;

  filterSubject = new BehaviorSubject<boolean>(false);

  houses: House[] = [];
  dynamicHouses: House[] = [];
  houseName: string;
  isLoading: boolean;
  listCount: number;
  regions: string[];

  constructor(public restApi: RestApiService) {
    this.regions = [...staticRegions];
  }

  ngOnInit() {
    this.loadHouses();
    this.houseType = window.localStorage.getItem('listType');;
  }

  private loadHouses() {
    this.isLoading = true;
    for (let i = 1; i <= pageCounter; i++) {
      this.restApi.getHouses(i).subscribe((data: House[]) => {
        this.houses = [...this.houses, ...data];
        if (i === pageCounter) {
          this.filterSubject.next(true);
        }
      });
    }

    this.filterSubject.subscribe(val => {
      if (val) {
        this.addIdToData();
        this.filterHouses();
      }
    });
  }

  private addIdToData() {
    for (let i = 0; i < this.houses.length; i++) {
      this.houses[i].id = i + 1;
    }
  }

  private filterHouses() {
    this.dynamicHouses = [...this.houses];
  
    if (this.houseType === 'main') {
      const tempHouses: House[] = [];
      for (let i = 1; i < mainHouses.length - 1; i++) {
        tempHouses.push(this.houses[i]);
      }
      this.dynamicHouses = tempHouses;
    } else {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < mainHouses.length; i++) {
        this.dynamicHouses.splice(mainHouses[i - 1], 1);
      }
      this.isLoading = false;
    }
    this.listCount = this.dynamicHouses.length;
    this.isLoading = false;
  }

  public removeRegion(region: string) {
    const index = this.regions.indexOf(region);

    if (index >= 0) {
      this.regions.splice(index, 1);
    }

    for (let i = 0; i < this.dynamicHouses.length; i++) {
      if (this.dynamicHouses[i].region.includes(region)) {
        this.dynamicHouses.splice(i, 1);
      }
    }

    this.listCount = this.dynamicHouses.length;
  }

  public refreshFilter() {
    this.regions = [...staticRegions];
    this.dynamicHouses = [...this.houses];
    this.listCount = this.dynamicHouses.length;
  }


}
