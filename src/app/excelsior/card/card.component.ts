import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() operations!: any[];

  constructor(public http: HttpClient) {}

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

  onSubmit(operation: any): void {
    console.log('Submitted operation:', operation);
  }
}
