import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsPositionsComponent } from './clients-positions.component';

describe('ClientsPositionsComponent', () => {
  let component: ClientsPositionsComponent;
  let fixture: ComponentFixture<ClientsPositionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsPositionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsPositionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
