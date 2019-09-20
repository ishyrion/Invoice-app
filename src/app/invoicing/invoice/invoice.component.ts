import { Component, OnInit } from '@angular/core';
import { Invoice, InvoiceSummary } from '../model/item';
import { ClientService } from 'src/app/clients/service/client-service';
import { Client } from 'src/app/clients/clientModel/client';


@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  invoice: Invoice;
  invoiceSummary: InvoiceSummary;

  clientService: ClientService;
  clients: Client[];

  constructor(clientService: ClientService) {
    this.clientService = clientService;
    this.clients = this.clientService.clients;
  }

  ngOnInit() {
    this.invoice = {
      items: []
    };

    this.invoiceSummary = this.recalculateSummery(this.invoice);
  }

  recalculateSummery(invoice: Invoice): InvoiceSummary {
    const brutto = invoice.items.map(i => i.brutto).reduce((sum, i) => sum + i, 0);
    const netto = invoice.items.map(i => i.netto).reduce((sum, i) => sum + i, 0);

    return {
      brutto,
      netto,
      tax: this.round(brutto - netto, 2)
    };
  }

  private round(price: number, digits: number): number {
    const rounded = Number((Math.round(price * 100) / 100).toFixed(digits));
    return rounded;
}

  updateItems(items) {
    this.invoiceSummary = this.recalculateSummery(this.invoice);
  }
}
