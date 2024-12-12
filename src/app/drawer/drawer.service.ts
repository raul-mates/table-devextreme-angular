import { Injectable, signal } from '@angular/core';
import { MockDataService } from '../mockData/Table data';
import { TableDataInterface } from '../shared/interfaces';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DrawerService {
  isDrawerOpen = signal(false);
  fullData!: TableDataInterface[];
  tableData = signal(this.fullData);

  constructor(public mockDataService: MockDataService) {
    this.fullData = this.mockDataService.getData();
  }

  getTableData() {
    return of(this.fullData);
  }

  toggleDrawer() {
    this.isDrawerOpen.update((state) => !state);
  }

  setDrawerState(state: boolean) {
    this.isDrawerOpen.set(state);
  }
}
