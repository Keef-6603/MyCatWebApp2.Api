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
  //catboxes = [
  //  { Profile: 'John Doe', BoxSize: 25, Boxtype: 'Standard', RegistrationStatus:'Approved' },
  //  { Profile: 'Jane Smith', BoxSize: 30, Boxtype: 'Economy', RegistrationStatus:'Pending' },
  //  { Profile: 'Michael Johnson', BoxSize: 35, Boxtype: 'Deluxe', RegistrationStatus:'Rejected' }
  //];
  catboxes: Array<Catbox> = dataset;
}
