import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import {
  DxDataGridModule,
  DxTemplateModule,
  DxTextBoxModule,
  DxButtonModule,
  DevExtremeModule,
  DxDropDownButtonModule,
  DxChartModule,
  DxDrawerModule,
  DxToolbarModule,
} from 'devextreme-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { OrderStatusComponent } from './order-status/order-status.component';
import { ModalComponent } from './modal/modal.component';
import { DrawerComponent } from './drawer/drawer.component';
import { ChartComponent } from './chart/chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    OrderStatusComponent,
    ModalComponent,
    DrawerComponent,
    ChartComponent,
    PieChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    DxDataGridModule,
    DxButtonModule,
    DxTextBoxModule,
    DxTemplateModule,
    DevExtremeModule,
    DxDropDownButtonModule,
    DxChartModule,
    DxDrawerModule,
    DxToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
