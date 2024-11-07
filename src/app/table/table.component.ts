import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MockDataService } from '../mockData/Table data';
import { DxoHeaderFilterComponent } from 'devextreme-angular/ui/nested';
import { ModalService } from '../modal.service';
import { ALL_STATUS } from '../shared/all-status';
import { ACTIONS } from '../mockData/Actions 1';
import { TableDataInterface, SummaryInfo } from '../shared/interfaces';
import { ItemClickEvent } from 'devextreme/ui/drop_down_button';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  dataSource: TableDataInterface[];
  customerId: string = '';
  @Output() dataSourceChanged = new EventEmitter<TableDataInterface[]>();

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
    this.dataSource = this.mockDataService.getData();
    this.dataSourceChanged.emit(this.dataSource);
  }

  ngOnInit(): void {
    this.dataSourceChanged.emit(this.dataSource);
  }

  deleteItem(rowData: TableDataInterface) {
    const index = this.dataSource.indexOf(rowData);
    if (index > -1) {
      this.dataSource.splice(index, 1);
      this.dataSource = [...this.dataSource];
      this.dataSourceChanged.emit(this.dataSource);
    }
  }

  onDropDownItemClicked(event: ItemClickEvent, rowData: TableDataInterface) {
    const clickedAction = event.itemData;

    if (clickedAction.name === ACTIONS['DELETE'].value) {
      this.deleteItem(rowData);
    }

    if (clickedAction.name === ACTIONS['SUBMIT'].value) {
      rowData.orderStatus = ALL_STATUS['SUBMITTED'].value;
      this.dataSource = [...this.dataSource];
      this.dataSourceChanged.emit(this.dataSource);
    }

    if (clickedAction.name === ACTIONS['INSIGHTS'].value) {
      this.modalService.openModal(rowData);
      this.modalService.modalForInsights.set(true);
    }
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

  onRejectReasonChange(event: Event, rowData: TableDataInterface): void {
    const inputElement = event.target as HTMLInputElement;
    rowData.rejectReason = inputElement.value;
  }

  customizeTotalText(summaryInfo: SummaryInfo) {
    return summaryInfo.value
      ? `Total: ${summaryInfo.value.toFixed(2)}`
      : 'Total: 0.00';
  }

  handleStatusChanged(updatedRowData: TableDataInterface) {
    this.dataSource = this.dataSource.map((item: TableDataInterface) =>
      item.orderId === updatedRowData.orderId ? { ...updatedRowData } : item
    );

    this.dataSourceChanged.emit(this.dataSource);
  }
}
