import { Injectable, signal } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  private confirmationSubject = new Subject<boolean>();

  isDialogOpen = signal(false);

  constructor() {}

  updateDialogState(state: boolean) {
    this.isDialogOpen.set(state);
  }

  confirm() {
    this.confirmationSubject.next(true);
  }

  cancel() {
    this.confirmationSubject.next(false);
  }

  onConfirmAction() {
    return this.confirmationSubject.asObservable();
  }
}
