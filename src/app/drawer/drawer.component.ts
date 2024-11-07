import { Component, Input } from '@angular/core';
import { TableDataInterface } from '../shared/interfaces';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.scss',
})
export class DrawerComponent {
  @Input() isOpen: boolean = false;

  chartData: TableDataInterface[] = [];

  handleDataSourceChanged(data: TableDataInterface[]) {
    this.chartData = data;
  }
}
