import { Component, OnInit, Input } from '@angular/core';
import { RestApiService } from '../../services/rest-api.service';
import { House } from '../../models/house';
import { BehaviorSubject } from 'rxjs';

const mainHouses = [7, 15, 16, 17, 34, 62, 109, 143, 145, 169, 196, 214, 229, 274, 362, 378, 395, 398];
const pageCounter = 10;

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.scss']
})
export class HouseListComponent implements OnInit {

  @Input() houseType: string;

  filterSubject = new BehaviorSubject<boolean>(false);

  houses: House[] = [];
  houseName: string;
  isLoading: boolean;
  listCount: number;

  constructor(public restApi: RestApiService) { }

  ngOnInit() {
    this.loadHouses();
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
        this.filterHouses();
        this.listCount = this.houses.length;
      }
    });
  }

  private filterHouses() {
    if (this.houseType === 'main') {
      const tempHouses: House[] = [];
      for (let i = 0; i < mainHouses.length; i++) {
        tempHouses.push(this.houses[i]);
      }
      this.houses = tempHouses;
    } else {
      console.log(this.houses.length);
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < mainHouses.length; i++) {
        this.houses.slice(mainHouses[i], 1);
      }
      console.log(this.houses.length);
      this.isLoading = false;
    }
  }


}
