import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.scss'],
})
export class OrderStatusComponent {
  @Input() orderStatus!: string;

  getOrderStatusLabel(orderStatus: string): string {
    const orderStatusMap: { [key: string]: string } = {
      APPROVED: 'Received ERP',
      REOPENED: 'Reopened',
      NOT_CREATED_YET: 'Not created',
      SUBMITTED: 'Submitted',
      REJECTED: 'Rejected',
      OPEN: 'Open',
    };

    return orderStatusMap[orderStatus] || 'Unknown Brand';
  }
}
