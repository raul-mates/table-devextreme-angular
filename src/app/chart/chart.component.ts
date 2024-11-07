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
    return [
      {
        range: '<50',
        ordersCount: this.getOrdersInRange(0, 50).length,
        orders: this.getOrdersInRange(0, 50),
      },
      {
        range: '50 - 100',
        ordersCount: this.getOrdersInRange(50, 100).length,
        orders: this.getOrdersInRange(50, 100),
      },
      {
        range: '100 - 200',
        ordersCount: this.getOrdersInRange(100, 200).length,
        orders: this.getOrdersInRange(100, 200),
      },
      {
        range: '200 - 300',
        ordersCount: this.getOrdersInRange(200, 300).length,
        orders: this.getOrdersInRange(200, 300),
      },
      {
        range: '>300',
        ordersCount: this.getOrdersInRange(300, Infinity).length,
        orders: this.getOrdersInRange(300, Infinity),
      },
    ];
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
