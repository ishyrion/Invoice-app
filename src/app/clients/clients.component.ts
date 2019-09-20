import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Client } from './clientModel/client';
import { ClientService } from './service/client-service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  faPlus = faPlus;

  private clientService: ClientService;
  @Input()
  private clients: Client[];
  @Output()
  removeItem: EventEmitter<Client[]> = new EventEmitter();

  constructor(clientService: ClientService) {
    this.clientService = clientService;
    this.clients = this.clientService.clients;
  }
  ngOnInit() {}

  removeClient(client: Client): void {
    this.clients = this.clients.filter(c => c.id !== client.id);
    this.removeItem.next(this.clients);
    this.clientService.clients = this.clients;
  }

}
