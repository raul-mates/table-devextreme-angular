import { Component, OnInit } from '@angular/core';
import { ENVIRONMENTS } from '../../mockData/first dropdown.service';
import { Environment } from '../../shared/interfaces';
import { Service, SERVICE_MANAGEMENT } from '../../mockData/Service management';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent implements OnInit {
  environments: Environment[] = ENVIRONMENTS;
  serviceManagement: Service[] = SERVICE_MANAGEMENT;

  selectedEnvironment: Environment = this.environments[0];

  serviceLabels: any[] = this.serviceManagement.map((service: Service) => ({
    id: service.serviceKey,
    label: service.serviceLabel,
  }));

  selectedService: any = this.serviceLabels[0];
  selectedOperations: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.onServiceSelectionChange();
  }

  formatEnvDisplay = (item: any): string => {
    if (!item) return '';
    return `${item.name} / ${item.IP}`;
  };

  onServiceSelectionChange(): void {
    const serviceFinder = this.serviceManagement.find(
      (service) => service.serviceKey === this.selectedService.id
    );

    if (serviceFinder && serviceFinder.operations) {
      this.selectedOperations = serviceFinder.operations;
    }

    console.log(this.selectedOperations);
  }
}
