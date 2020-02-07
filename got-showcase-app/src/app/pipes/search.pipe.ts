import { Pipe, PipeTransform } from '@angular/core';
import { House } from '../models/house';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(houses: House[], searchText: string): House[] {

    if (!houses) {
      return [];
    }

    if (!searchText) {
      return houses;
    }

    searchText = searchText.toLocaleLowerCase();

    return houses.filter(val => {
      return val.name.toLocaleLowerCase().includes(searchText);
    });
  }

}
