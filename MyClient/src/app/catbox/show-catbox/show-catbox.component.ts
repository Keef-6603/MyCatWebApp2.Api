import { Component } from '@angular/core';

@Component({
  selector: 'app-show-catbox',
  standalone: false,
  templateUrl: './show-catbox.component.html',
  styleUrl: './show-catbox.component.css'
})
export class ShowCatboxComponent {
  dataSource: any;
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
