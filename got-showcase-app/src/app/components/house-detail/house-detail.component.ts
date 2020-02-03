import { Component, OnInit } from '@angular/core';
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

  dataIsLoaded: boolean = false;

  house: House;
  currentLord: Character;
  heir: Character;
  overLord: Character;
  swornMembers: Character[] = [];

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
      this.loadCurrentLord(this.house.currentLord);
      this.loadHeir(this.house.heir);
      this.loadOverlord(this.house.overlord);
      this.loadSwornMembers(this.house.swornMembers);
    });
  }

  private loadCurrentLord(url: string) {
    this.restApi.getCharacterByUrl(url).subscribe((val: Character) => {
      this.currentLord = val;
    });
  }

  private loadHeir(url: string) {
    this.restApi.getCharacterByUrl(url).subscribe((val: Character) => {
      this.heir = val;
    });
  }

  private loadOverlord(url: string) {
    this.restApi.getCharacterByUrl(url).subscribe((val: Character) => {
      this.overLord = val;
    });
  }

  private loadSwornMembers(urls: string[]) {
    urls.forEach(url => {
      this.restApi.getCharacterByUrl(url).subscribe((val: Character) => {
        this.swornMembers.push(val);
        this.dataIsLoaded = true;
      });
    })
  
  }

}
