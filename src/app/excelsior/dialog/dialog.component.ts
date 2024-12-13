import { Component } from '@angular/core';
import { DialogService } from './dialog.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  message: string = 'Are you sure you want to proceed?';

  constructor(public dialogService: DialogService) {}

  closeDialog() {
    this.dialogService.updateDialogState(false);
    this.dialogService.cancel();
  }

  confirmDialog() {
    this.dialogService.updateDialogState(false);
    this.dialogService.confirm();
  }
}
