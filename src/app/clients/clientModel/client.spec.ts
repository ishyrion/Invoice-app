import { Client } from './client';

describe('Client', () => {
  it('should create an instance', () => {
    const clientItem: Client = {
      id: '_1',
      firstName: 'John',
      lastName: 'Doe',
      taxNumber: '123451671',
      date: new Date()
    };
  });
});
