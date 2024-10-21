import { Component, Input } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.scss'],
})
export class OrderStatusComponent {
  @Input() data!: any;
  @Input() rejectReason: string = '';
  @Input() rowData!: any;

  constructor(public modalService: ModalService) {}

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

  handleReopenClicked(status: string, rowData: any) {
    if (status === 'REOPENED') {
      this.modalService.openModal(rowData);
      this.modalService.modalForInsights.set(false);
    }
  }

  handleIconClicked(data: any, element: HTMLElement) {
    data.orderStatus = element.classList.contains('icon-approve')
      ? 'APPROVED'
      : 'REJECTED';
  }
}
