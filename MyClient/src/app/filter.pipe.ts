import { Pipe, PipeTransform } from '@angular/core';
import { Catbox } from './data';

@Pipe({
  name: 'filter',
  standalone: false
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string, column: string): any[] {
    if (!items) return [];
    if (!searchText) return items;

    searchText = searchText.toLowerCase();
    return items.filter(item => {
      return item[column].toLowerCase().includes(searchText);
    });
  }

}
