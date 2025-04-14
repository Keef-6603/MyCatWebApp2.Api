import { Component } from '@angular/core';
import { Catprofile, dataset_2 } from '../../data';
@Component({
  selector: 'app-show-catprofile',
  standalone: false,
  templateUrl: './show-catprofile.component.html',
  styleUrl: './show-catprofile.component.css'
})
export class ShowCatprofileComponent {
  searchText: string = '';

  catprofiles: Array<Catprofile> = dataset_2;
}
