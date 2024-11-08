import { Component, Input } from '@angular/core';
import { MockDataService } from '../mockData/Table data';
import {
  TableDataInterface,
  ChartData,
  OrderSummary,
} from '../shared/interfaces';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent {
  private _data: TableDataInterface[] = [];
  ordersData: OrderSummary[] = [];
  chartData: ChartData[] = [];

  @Input()
  set data(value: TableDataInterface[]) {
    this._data = value;
    this.updateChartData();
  }

  constructor(public mockDataService: MockDataService) {}

  updateChartData(): void {
    this.ordersData = this._data
      .filter((order: TableDataInterface) => order.orderId && order.orderPieces)
      .map((order: TableDataInterface) => ({
        orderId: order.orderId,
        orderPieces: order.orderPieces,
        customerName: order.customerName,
      })) as OrderSummary[];

    this.chartData = this.getChartData();
  }

  getChartData(): ChartData[] {
    const ranges = [
      { label: '<50', min: 0, max: 50 },
      { label: '50 - 100', min: 50, max: 100 },
      { label: '100 - 200', min: 100, max: 200 },
      { label: '200 - 300', min: 200, max: 300 },
      { label: '>300', min: 300, max: Infinity },
    ];

    return ranges.map((range) => {
      const ordersInRange = this.getOrdersInRange(range.min, range.max);
      return {
        range: range.label,
        ordersCount: ordersInRange.length,
        orders: ordersInRange,
      };
    });
  }

  getOrdersInRange(min: number, max: number): OrderSummary[] {
    return this.ordersData
      .filter(
        (order: OrderSummary) =>
          order.orderPieces >= min && order.orderPieces < max
      )
      .map((order: OrderSummary) => ({
        orderId: order.orderId,
        customerName: order.customerName,
        orderPieces: order.orderPieces,
      }));
  }

  customTooltip = (info: {
    argumentText: string;
    point: { data: { orders: OrderSummary[] } };
  }) => {
    const range = info.argumentText;
    const orders = info.point.data.orders;

    let orderList = '<ul>';
    orders.forEach((order: OrderSummary) => {
      orderList += `<li>${order.orderId} - ${order.customerName}</li>`;
    });
    orderList += '</ul>';

    return `<div>
              <p>The following orders have sold ${range} number of pieces:</p>
              ${orderList}
            </div>`;
  };
}
