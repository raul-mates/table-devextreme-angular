import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from '../modal.service';
import { MockDataService } from '../mockData/Table data';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent implements OnInit {
  @Input() rowData: any;
  inputValue: string = '';
  ordersData: any;
  chartData: any;

  constructor(
    public modalService: ModalService,
    public mockDataService: MockDataService
  ) {}

  ngOnInit(): void {
    if (this.rowData && this.rowData.rejectReason) {
      this.inputValue = this.rowData.rejectReason;
    }

    this.ordersData = this.mockDataService
      .getData()
      .filter((order: any) => order.orderId && order.orderPieces)
      .map((order: any) => ({
        orderId: order.orderId,
        orderPieces: order.orderPieces,
        customerName: order.customerName,
      }));

    this.chartData = this.getChartData();
  }

  getChartData() {
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

  getOrdersInRange(min: number, max: number) {
    return this.ordersData
      .filter(
        (order: any) => order.orderPieces >= min && order.orderPieces < max
      )
      .map((order: any) => ({
        orderId: order.orderId,
        customerName: order.customerName,
      }));
  }

  customTooltip = (info: any) => {
    const range = info.argumentText;
    const orders = info.point.data.orders;

    let orderList = '<ul>';
    orders.forEach((order: any) => {
      orderList += `<li>${order.orderId} - ${order.customerName}</li>`;
    });
    orderList += '</ul>';

    return `<div>
              <p>The following orders have sold ${range} number of pieces:</p>
              ${orderList}
            </div>`;
  };

  onSaveClicked() {
    this.rowData.rejectReason = this.inputValue;
  }
}
