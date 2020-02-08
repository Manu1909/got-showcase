import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestApiService } from 'src/app/services/rest-api.service';
import { House } from 'src/app/models/house';
import { Character } from 'src/app/models/character';


@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.scss']
})
export class HouseDetailComponent implements OnInit {

  dataIsLoaded = false;

  id: number;
  house: House;
  houseType: string;
  currentLord: Character;
  heir: Character;
  overLord: Character;
  cadetBranches: House[] = [];
  swornMembers: Character[] = [];

  constructor(public actRoute: ActivatedRoute,
              public restApi: RestApiService) {
   }

  ngOnInit() {
    this.id = this.actRoute.snapshot.params.id;
    this.loadHouseDetails(this.id);
    this.houseType = window.localStorage.getItem('listType');
  }

  private loadHouseDetails(id: number) {
    this.restApi.getHouseById(id).subscribe((val: House) => {
      this.house = val;
      this.loadCurrentLord(this.house.currentLord);
      this.loadHeir(this.house.heir);
      this.loadOverlord(this.house.overlord);
      this.loadCadetBranches(this.house.cadetBranches);
      this.loadSwornMembers(this.house.swornMembers);
    });
  }

  private loadCurrentLord(url: string) {
    if (url !== '') {
      this.restApi.getCharacterByUrl(url).subscribe((val: Character) => {
        this.currentLord = val;
      });
    } else {
      this.currentLord = undefined;
    }
  }

  private loadHeir(url: string) {
    if (url !== '') {
      this.restApi.getCharacterByUrl(url).subscribe((val: Character) => {
        this.heir = val;
      });
    } else {
      this.heir = undefined;
    }
  }

  private loadOverlord(url: string) {
    if (url !== '') {
      this.restApi.getCharacterByUrl(url).subscribe((val: Character) => {
        this.overLord = val;
      });
    } else {
      this.loadOverlord = undefined;
    }
  }

  private loadCadetBranches(urls: string[]) {
    if (urls.length !== 0) {
      urls.forEach(url => {
        this.restApi.getHouseByUrl(url).subscribe((val: House) => {
          this.cadetBranches.push(val);
        });
      });
    }
  }

  private loadSwornMembers(urls: string[]) {
    if (urls.length !== 0) {
      urls.forEach(url => {
        this.restApi.getCharacterByUrl(url).subscribe((val: Character) => {
          this.swornMembers.push(val);
          this.dataIsLoaded = true;
        });
      });
    } else {
      this.dataIsLoaded = true;
    }

  }

}
