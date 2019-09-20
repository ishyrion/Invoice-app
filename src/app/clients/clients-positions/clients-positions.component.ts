import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Client } from '../clientModel/client';


@Component({
  selector: '[app-clients-positions]',
  templateUrl: './clients-positions.component.html',
  styleUrls: ['./clients-positions.component.scss']
})
export class ClientsPositionsComponent implements OnInit {
  faTrash = faTrash;

  constructor() {}
  @Input()
  private clients: Client[];
  @Input()
  private client: Client;
  @Input()
  private lp: number;
  @Output()
  private removeItem: EventEmitter<Client> = new EventEmitter<Client>();

  ngOnInit() {}

  removeClient(): void {
    this.removeItem.next(this.client);
  }
}
