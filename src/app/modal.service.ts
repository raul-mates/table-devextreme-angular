import { Injectable, signal } from '@angular/core';
import { TableDataInterface } from './shared/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  showModal = signal<boolean>(false);
  modalForInsights = signal<boolean>(false);
  rejectReason = signal<string>('');
  private modalRowData!: TableDataInterface;

  openModal(rowData: TableDataInterface): void {
    this.modalRowData = rowData;
    this.showModal.set(true);
  }

  closeModal(): void {
    this.showModal.set(false);
  }

  setRejectReason(value: string): void {
    this.rejectReason.set(value);
  }

  getRowData(): TableDataInterface {
    return this.modalRowData;
  }

  getRejectReason(): string {
    return this.rejectReason();
  }
}
