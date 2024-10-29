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
  @Input() arrayData: any;
  inputValue: string = '';

  constructor(
    public modalService: ModalService,
    public mockDataService: MockDataService
  ) {}

  ngOnInit(): void {
    if (this.rowData && this.rowData.rejectReason) {
      this.inputValue = this.rowData.rejectReason;
    }
  }

  onSaveClicked() {
    this.rowData.rejectReason = this.inputValue;
  }

  onModalBackgroundClicked(e: any) {
    if (e.target.classList.contains('modal-background'))
      this.modalService.closeModal();
  }
}
