import { Component, Input } from '@angular/core';
import { TableDataInterface } from '../shared/interfaces';
import { MockDataService } from '../mockData/Table data';
import { DrawerService } from './drawer.service';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.scss',
})
export class DrawerComponent {
  dataSource!: TableDataInterface[];

  @Input() isOpen: boolean = false;

  constructor(
    public mockDataService: MockDataService,
    public drawerService: DrawerService
  ) {
    this.dataSource = this.drawerService.getTableData();
  }

  handleDataSourceChanged(data: TableDataInterface[]) {
    this.dataSource = data;
  }
}
