import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cust4Component } from './cust4.component';

describe('Cust4Component', () => {
  let component: Cust4Component;
  let fixture: ComponentFixture<Cust4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cust4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cust4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
