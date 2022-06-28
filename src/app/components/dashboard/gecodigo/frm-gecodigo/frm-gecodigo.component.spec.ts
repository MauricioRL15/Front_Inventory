import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmGecodigoComponent } from './frm-gecodigo.component';

describe('FrmGecodigoComponent', () => {
  let component: FrmGecodigoComponent;
  let fixture: ComponentFixture<FrmGecodigoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrmGecodigoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrmGecodigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
