import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InvoiceItem, InvoiceItemFactory } from '../model/item';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-invoice-positions',
  templateUrl: './invoice-positions.component.html',
  styleUrls: ['./invoice-positions.component.scss']
})
export class InvoicePositionsComponent implements OnInit {
  faPlus = faPlus;
  @Input()
  private positions: InvoiceItem[];

  @Output()
  itemsChanged: EventEmitter<InvoiceItem[]> = new EventEmitter();

  private invoiceItemFactory: InvoiceItemFactory;

  constructor() {
    this.invoiceItemFactory = new InvoiceItemFactory();
  }

  ngOnInit() {
  }

  addPosition(): void {
    this.positions.push(this.invoiceItemFactory.newInvoiceItem());
    this.itemsChanged.next(this.positions);
  }

  removePosition(position: InvoiceItem): void {
    this.positions = this.positions.filter(p => p.id !== position.id);
    this.itemsChanged.next(this.positions);
  }

  handlePositionChanged(position: InvoiceItem): void {
    this.itemsChanged.next(this.positions);
  }
}
