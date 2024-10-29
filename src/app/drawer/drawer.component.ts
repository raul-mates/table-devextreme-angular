import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.scss',
})
export class DrawerComponent {
  @Input() isOpen: boolean = false;

  chartData: any[] = [];

  handleDataSourceChanged(data: any[]) {
    this.chartData = data;
  }
}
