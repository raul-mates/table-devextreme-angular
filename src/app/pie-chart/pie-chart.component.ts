import { Component, Input } from '@angular/core';
import {
  TableDataInterface,
  PieChartDataInterface,
  TooltipInfo,
} from '../shared/interfaces';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent {
  private _data: TableDataInterface[] = [];
  pieChartData: PieChartDataInterface[] = [];

  statusColorMap: { [key: string]: string } = {
    APPROVED: '#36d298',
    SUBMITTED: '#ffb84d',
    REJECTED: '#ff6666',
    NOT_CREATED_YET: '#c0c0c0',
    REOPENED: '#ff6b9b',
    OPEN: '#42c6ff',
  };

  @Input()
  set data(value: TableDataInterface[]) {
    this._data = value;
    this.updatePieChartData();
  }

  updatePieChartData(): void {
    const statusMap = new Map<
      string,
      { totalValue: number; salesPrice: number; orders: TableDataInterface[] }
    >();

    this._data.forEach((order) => {
      const status = order.orderStatus;
      if (!statusMap.has(status)) {
        statusMap.set(status, { totalValue: 0, salesPrice: 0, orders: [] });
      }
      const statusData = statusMap.get(status)!;

      statusData.totalValue += order.orderValueBudgetRelevant ?? 0;
      statusData.salesPrice += order.salesPrice;

      statusData.orders.push(order);
    });

    this.pieChartData = Array.from(statusMap.entries()).map(
      ([status, data]) => ({
        status: status.toUpperCase(),
        totalValue: data.totalValue,
        salesPrice: data.salesPrice,
        orders: data.orders,
        count: data.orders.length,
      })
    );
  }

  customizeTooltip = (info: TooltipInfo) => {
    const status = info.argumentText;
    const data = this.pieChartData.find((d) => d.status === status);

    if (!data) {
      return { text: 'No data available.' };
    }

    const formattedTotalValue = new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(data.totalValue);

    const formattedSalesPrice = new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(data.salesPrice);

    let orderList = `<ul>`;
    data.orders.forEach((order: TableDataInterface) => {
      const orderId = order.orderId ? order.orderId : 'N/A';
      orderList += `<li>${orderId} - ${order.customerName}</li>`;
    });
    orderList += `</ul>`;

    return {
      html: `<div>
              <p>Status: <b>${status}</b></p>
              <p>Total Value: <b>${formattedTotalValue}</b></p>
              <p>Sales Price: <b>${formattedSalesPrice}</b></p>
              <p>Orders:</p>
              ${orderList}
            </div>`,
    };
  };

  customizePoint = (pointInfo: { argument: string }) => {
    const color = this.statusColorMap[pointInfo.argument] || '#cccccc';
    return { color };
  };
}
