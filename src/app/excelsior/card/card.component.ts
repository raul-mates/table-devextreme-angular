import { Component, Input } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DialogService } from '../dialog/dialog.service';
import { switchMap, take } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() operations!: any[];

  constructor(private http: HttpClient, private dialogService: DialogService) {}

  areAllFieldsValid(operation: any): boolean {
    const paramsValid = operation.params
      .filter((param: any) => param.isRequierd)
      .every((param: any) => param.value && param.value.trim() !== '');

    const pathVariablesValid = operation.pathVariables
      .filter((pathVariable: any) => pathVariable.isRequierd)
      .every(
        (pathVariable: any) =>
          pathVariable.value && pathVariable.value.trim() !== ''
      );

    return paramsValid && pathVariablesValid;
  }

  private preparePayload(operation: any): HttpParams | Record<string, any> {
    const payload: any = {};

    operation.pathVariables.forEach((pathVariable: any) => {
      payload[pathVariable.key] = pathVariable.value || '';
    });

    operation.params.forEach((param: any) => {
      payload[param.key] = param.value || '';
    });

    return operation.method === 'GET'
      ? new HttpParams({ fromObject: payload })
      : payload;
  }

  onSubmit(operation: any): void {
    if (!this.areAllFieldsValid(operation)) {
      console.error('Validation failed: Required fields are missing.');
      return;
    }

    const payload = this.preparePayload(operation);

    this.dialogService.updateDialogState(true);

    this.dialogService
      .onConfirmAction()
      .pipe(
        take(1),
        switchMap((confirmed) => {
          this.dialogService.updateDialogState(false);

          return confirmed ? this.executeApiCall(operation, payload) : of(null);
        })
      )
      .subscribe({
        next: (response) => {
          if (response) {
            console.log(
              `${operation.method} Operation submitted successfully:`,
              response
            );
          }
        },
        error: (error) => {
          console.error(
            `Error submitting ${operation.method} operation:`,
            error
          );
        },
      });
  }

  private executeApiCall(operation: any, payload: any) {
    const apiUrl = operation.api;

    if (operation.method === 'GET') {
      return this.http.get(apiUrl, { params: payload as HttpParams });
    } else if (operation.method === 'POST') {
      return this.http.post(apiUrl, payload);
    } else {
      console.error(`Unsupported HTTP method: ${operation.method}`);
      return of(null);
    }
  }
}
