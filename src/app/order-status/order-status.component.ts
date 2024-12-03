import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalService } from '../modal.service';
import { ALL_STATUS } from '../shared/all-status';
import { TableDataInterface } from '../shared/interfaces';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.scss'],
})
export class OrderStatusComponent {
  @Input() data!: TableDataInterface;
  @Input() rejectReason: string = '';
  @Input() rowData!: TableDataInterface;

  @Output() statusChanged = new EventEmitter<TableDataInterface>();

  ALL_STATUS = ALL_STATUS;

  constructor(public modalService: ModalService) {}

  getOrderStatusLabel(orderStatus: string): string {
    return ALL_STATUS[orderStatus].label || 'Unknown Status';
  }

  handleReopenClicked(status: string, rowData: TableDataInterface) {
    if (status === ALL_STATUS['REOPENED'].value) {
      this.modalService.openModal(rowData);
      this.modalService.modalForInsights.set(false);
    }
  }

  handleIconClicked(data: TableDataInterface, element: HTMLElement) {
    data.orderStatus = element.classList.contains('icon-approve')
      ? ALL_STATUS['APPROVED'].value
      : ALL_STATUS['REJECTED'].value;

    this.statusChanged.emit(this.data);
  }
}
