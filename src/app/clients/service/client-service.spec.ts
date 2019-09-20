import { TestBed } from '@angular/core/testing';
import { ClientService } from './client-service';
import { Client } from '../clientModel/client';
import { AppComponent } from 'src/app/app.component';

describe('ClientService', () => {
  let service: ClientService;
  beforeEach(() => { service = new ClientService(); });
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [ AppComponent ]
  }));

  it('should create clients table', () => {
    const clientsTable: Client[] = [
      {
        id: service.idGenerator(),
        firstName: 'John',
        lastName: 'Doe',
        taxNumber: '709480016',
        date: new Date()
      },
      {
        id: service.idGenerator(),
        firstName: 'Maverick',
        lastName: 'Squedo',
        taxNumber: '996736262',
        date: new Date()
      }
    ];

    expect(clientsTable).toBeTruthy(service.clients);
  });

  it('should generate string id', () => {
    expect(service.idGenerator).toString();
  });
});
