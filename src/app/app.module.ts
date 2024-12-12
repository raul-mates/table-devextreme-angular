import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
import { MainPageComponent } from './excelsior/main-page/main-page.component';
import { CardComponent } from './excelsior/card/card.component';
import { DialogComponent } from './excelsior/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    OrderStatusComponent,
    ModalComponent,
    DrawerComponent,
    ChartComponent,
    PieChartComponent,
    MainPageComponent,
    CardComponent,
    DialogComponent,
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
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
