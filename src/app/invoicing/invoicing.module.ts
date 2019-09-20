import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InvoiceComponent } from './invoice/invoice.component';
import { SinglePositionComponent } from './single-position/single-position.component';
import { PriceCalculator } from './model/price-calculator/price-calculator';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ItemCatalog } from './model/item-catalog/item-catalog';
import { LocalItemCatalog } from './model/item-catalog/local-item-catalog';
import { HttpItemCatalog } from './model/item-catalog/http-item-catalog';
import { SummaryComponent } from './summary/summary.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InvoicePositionsComponent } from './invoice-positions/invoice-positions.component';

@NgModule({
  declarations: [InvoiceComponent, SinglePositionComponent, SummaryComponent, InvoicePositionsComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  exports: [InvoiceComponent],
  providers: [
    {
      provide: PriceCalculator, useFactory: () => new PriceCalculator()
    },
    // {
    //   provide: ItemCatalog, useFactory: () => new LocalItemCatalog()
    // },
    {
      provide: ItemCatalog, useFactory: (http: HttpClient) => new HttpItemCatalog(http), deps: [HttpClient]
    }
  ]
})
export class InvoicingModule { }
