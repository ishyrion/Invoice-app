import { Injectable } from '@angular/core';
import { Client } from '../clientModel/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  clients: Client[];

  constructor() {
    this.clients = [
      {
        id: this.idGenerator(),
        firstName: 'John',
        lastName: 'Doe',
        taxNumber: '709480016',
        date: new Date()
      },
      {
        id: this.idGenerator(),
        firstName: 'Maverick',
        lastName: 'Squedo',
        taxNumber: '996736262',
        date: new Date()
      }
    ];
  }

  idGenerator() {
    return '_' + Math.random().toString(36).substr(2, 16);
  }
}
