import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmCreditoComponent } from './frm-credito.component';

describe('FrmCreditoComponent', () => {
  let component: FrmCreditoComponent;
  let fixture: ComponentFixture<FrmCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrmCreditoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrmCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
