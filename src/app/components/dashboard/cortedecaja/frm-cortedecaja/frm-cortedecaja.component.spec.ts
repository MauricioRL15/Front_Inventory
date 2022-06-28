import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmCortedecajaComponent } from './frm-cortedecaja.component';

describe('FrmCortedecajaComponent', () => {
  let component: FrmCortedecajaComponent;
  let fixture: ComponentFixture<FrmCortedecajaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrmCortedecajaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrmCortedecajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
