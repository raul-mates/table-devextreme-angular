import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  showModal = signal<boolean>(false);
  rejectReason = signal<string>('');
  private modalRowData: any = null;

  openModal(rowData: any) {
    this.modalRowData = rowData;
    this.showModal.set(true);
  }

  closeModal() {
    this.showModal.set(false);
  }

  setRejectReason(value: string) {
    this.rejectReason.set(value);
  }

  getRowData() {
    return this.modalRowData;
  }

  getRejectReason(): string {
    return this.rejectReason();
  }
}
