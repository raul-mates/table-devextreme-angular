import { Component, Input } from '@angular/core';
import { TableDataInterface } from '../shared/interfaces';
import { MockDataService } from '../mockData/Table data';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.scss',
})
export class DrawerComponent {
  dataSource!: TableDataInterface[];

  @Input() isOpen: boolean = false;

  constructor(public mockDataService: MockDataService) {
    this.dataSource = this.mockDataService.getData();
  }

  handleDataSourceChanged(data: TableDataInterface[]) {
    this.dataSource = data;
  }
}
