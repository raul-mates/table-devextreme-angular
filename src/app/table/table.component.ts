import { Component } from '@angular/core';
import { MockDataService } from '../mockData/Table data';
import { faPencilAlt, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { DxoHeaderFilterComponent } from 'devextreme-angular/ui/nested';
import { ACTIONS } from '../mockData/Actions 1';

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

  brandDataSource = [
    { id: 1, name: 'Street One' },
    { id: 2, name: 'Cecil' },
    { id: 4, name: 'Street One Men' },
    { id: 6, name: 'Street One Studio' },
  ];

  constructor(private mockDataService: MockDataService) {
    this.dataSource = this.mockDataService.getData().map((item: any) => {
      const actions = item.actions.map((action: ActionKeys, index: number) => ({
        id: index + 1,
        name: ACTIONS[action]?.value || action,
        icon: ACTIONS[action]?.icon || '',
      }));
      return { ...item, actions };
    });
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

  onIconClicked(data: any) {
    console.log(data);
  }
}
