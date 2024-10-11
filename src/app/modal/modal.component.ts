import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent implements OnInit {
  @Input() rowData: any;
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
}
