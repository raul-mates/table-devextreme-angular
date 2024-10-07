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
} from 'devextreme-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, TableComponent],
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
