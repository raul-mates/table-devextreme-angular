import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements OnInit, OnChanges {
  @Input() data: any[] = [];
  pieChartData: any[] = [];

  ngOnInit(): void {
    this.updatePieChartData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && !changes['data'].firstChange) {
      this.updatePieChartData();
    }
  }

  updatePieChartData(): void {
    const statusMap = new Map<
      string,
      { totalValue: number; salesPrice: number; orders: any[] }
    >();

    this.data.forEach((order) => {
      const status = order.orderStatus;
      if (!statusMap.has(status)) {
        statusMap.set(status, { totalValue: 0, salesPrice: 0, orders: [] });
      }
      const statusData = statusMap.get(status)!;

      statusData.totalValue += order.orderValueBudgetRelevant;
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

  customizeTooltip = (info: any) => {
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
    data.orders.forEach((order: any) => {
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
}
