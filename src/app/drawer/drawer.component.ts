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
  dataSource!: any;

  @Input() isOpen: boolean = false;

  buttonOptions = {
    icon: 'menu',
    onClick: () => {
      this.drawerService.toggleDrawer();
    },
  };

  constructor(
    public mockDataService: MockDataService,
    public drawerService: DrawerService
  ) {
    this.drawerService.getTableData().subscribe((response) => {
      this.dataSource = response;
    });
  }

  handleDataSourceChanged(data: TableDataInterface[]) {
    this.dataSource = data;
  }
}
