import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from '../modal.service';
import { MockDataService } from '../mockData/Table data';
import { TableDataInterface } from '../shared/interfaces';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent implements OnInit {
  @Input() rowData!: TableDataInterface;
  @Input() arrayData!: TableDataInterface[];
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

  onModalBackgroundClicked(e: MouseEvent) {
    if (
      e.target instanceof HTMLElement &&
      e.target.classList.contains('modal-background')
    )
      this.modalService.closeModal();
  }
}
