import { Component } from '@angular/core';
import { DrawerService } from './drawer/drawer.service';
import { TableDataInterface } from './shared/interfaces';
import { MockDataService } from './mockData/Table data';
import { ModalService } from './modal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'table-project';
  fullData: TableDataInterface[] = [];

  buttonOptions = {
    icon: 'menu',
    onClick: () => {
      this.drawerService.toggleDrawer();
    },
  };

  constructor(
    public drawerService: DrawerService,
    public mockDataService: MockDataService,
    public modalService: ModalService,
    public router: Router
  ) {
    this.fullData = this.drawerService.getTableData();
  }
}
