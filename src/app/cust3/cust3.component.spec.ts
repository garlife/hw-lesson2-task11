import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cust3Component } from './cust3.component';

describe('Cust3Component', () => {
  let component: Cust3Component;
  let fixture: ComponentFixture<Cust3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cust3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cust3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
