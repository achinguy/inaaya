import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientTryComponent } from './client-try.component';

describe('ClientTryComponent', () => {
  let component: ClientTryComponent;
  let fixture: ComponentFixture<ClientTryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientTryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientTryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
