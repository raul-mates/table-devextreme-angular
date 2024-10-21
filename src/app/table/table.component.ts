import { Component } from '@angular/core';
import { MockDataService } from '../mockData/Table data';
import { faPencilAlt, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { DxoHeaderFilterComponent } from 'devextreme-angular/ui/nested';
import { ACTIONS } from '../mockData/Actions 1';
import { ModalService } from '../modal.service';

type ActionKeys = keyof typeof ACTIONS;

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  dataSource: any;
  customerId: string = '';
  faPencilAlt = faPencilAlt;
  faEllipsis = faEllipsis;
  debouncedRejectReasonChange: Function;

  brandDataSource = [
    { id: 1, name: 'Street One' },
    { id: 2, name: 'Cecil' },
    { id: 4, name: 'Street One Men' },
    { id: 6, name: 'Street One Studio' },
  ];

  constructor(
    private mockDataService: MockDataService,
    public modalService: ModalService
  ) {
    this.debouncedRejectReasonChange = this.debounce(
      this.onRejectReasonChange,
      800
    );
    this.dataSource = this.mockDataService.getData().map((item: any) => {
      const actions = item.actions.map((action: ActionKeys, index: number) => ({
        id: index + 1,
        name: ACTIONS[action]?.value || action,
        label: ACTIONS[action]?.label,
        icon: ACTIONS[action]?.icon || '',
      }));
      return { ...item, actions };
    });

    this.customizeTotalText = this.customizeTotalText.bind(this);
  }

  getCurrencySymbol(currency: string): string {
    const currencyMap: { [key: string]: string } = {
      EUR: '€',
      USD: '$',
      GBP: '£',
    };

    return currencyMap[currency] || currency;
  }

  getBrandNameFromId(brandId: number): string {
    const brandMap: { [key: number]: string } = {
      1: 'Street One',
      2: 'Cecil',
      4: 'Street One Men',
      6: 'Street One Studio',
    };

    return brandMap[brandId] || 'Unknown Brand';
  }

  getOrderStatusLabel(orderStatus: string): string {
    const orderStatusMap: { [key: string]: string } = {
      APPROVED: 'Received ERP',
      REOPENED: 'Reopened',
      NOT_CREATED_YET: 'Not created',
      SUBMITTED: 'Submitted',
      REJECTED: 'Rejected',
      OPEN: 'Open',
    };

    return orderStatusMap[orderStatus] || 'Unknown Brand';
  }

  brandHeaderFilter: DxoHeaderFilterComponent['dataSource'] = [
    {
      text: 'Street One',
      value: ['brand', '=', 1],
    },
    {
      text: 'Cecil',
      value: ['brand', '=', 2],
    },
    {
      text: 'Street One Men',
      value: ['brand', '=', 4],
    },
    {
      text: 'Street One Studio',
      value: ['brand', '=', 6],
    },
  ];

  onRejectReasonChange(event: Event, rowData: any): void {
    const inputElement = event.target as HTMLInputElement;
    rowData.rejectReason = inputElement.value;
  }

  debounce(
    func: (...args: any[]) => void,
    wait: number
  ): (...args: any[]) => void {
    let timeoutId: any;

    return (...args: any[]) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, wait);
    };
  }

  onDropDownItemClicked(event: any, rowData: any) {
    const clickedAction = event.itemData;
    if (clickedAction.name === 'DELETE') {
      this.deleteItem(rowData);
    }

    if (clickedAction.name === 'SUBMIT') {
      rowData.orderStatus = 'SUBMITTED';
    }

    if (clickedAction.name === 'INSIGHTS') {
      this.modalService.openModal(rowData);
      this.modalService.modalForInsights.set(true);
    }
  }

  deleteItem(rowData: any) {
    const index = this.dataSource.indexOf(rowData);
    if (index > -1) {
      this.dataSource.splice(index, 1);
    }
  }

  customizeTotalText(summaryInfo: any) {
    return summaryInfo.value
      ? `Total: ${summaryInfo.value.toFixed(2)}`
      : 'Total: 0.00';
  }
}
