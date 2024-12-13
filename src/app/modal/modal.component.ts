import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from '../modal.service';
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

  constructor(public modalService: ModalService) {}

  ngOnInit(): void {
    if (this.rowData && this.rowData.rejectReason) {
      this.inputValue = this.rowData.rejectReason;
    }
  }

  onSaveClicked() {
    this.rowData.rejectReason = this.inputValue;
  }

  onModalBackgroundClicked(e: MouseEvent) {
    console.log(e.target);
    if (
      e.target instanceof HTMLElement &&
      e.target.classList.contains('modal-background')
    ) {
      this.modalService.closeModal();
    }
    e.stopPropagation();
  }
}
