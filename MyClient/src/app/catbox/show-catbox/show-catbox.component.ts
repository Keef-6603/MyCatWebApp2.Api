import { Component } from '@angular/core';
import { Catbox, dataset } from '../../data';
@Component({
  selector: 'app-show-catbox',
  standalone: false,
  templateUrl: './show-catbox.component.html',
  styleUrl: './show-catbox.component.css'
})
export class ShowCatboxComponent {
  searchText: string = '';

  catboxes: Array<Catbox> = dataset;
}
