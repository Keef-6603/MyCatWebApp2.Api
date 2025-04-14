import { Component } from '@angular/core';
import { Catprofile, dataset_2 } from '../../data';


@Component({
  selector: 'app-list-select-catprofile',
  standalone: false,
  templateUrl: './list-select-catprofile.component.html',
  styleUrl: './list-select-catprofile.component.css'
})
export class ListSelectCatprofileComponent {
  catprofiles: Array<Catprofile> = dataset_2;


}
