import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cust1Component } from './cust1.component';

describe('Cust1Component', () => {
  let component: Cust1Component;
  let fixture: ComponentFixture<Cust1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cust1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cust1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
