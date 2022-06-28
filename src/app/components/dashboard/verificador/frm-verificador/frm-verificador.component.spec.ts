import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmVerificadorComponent } from './frm-verificador.component';

describe('FrmVerificadorComponent', () => {
  let component: FrmVerificadorComponent;
  let fixture: ComponentFixture<FrmVerificadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrmVerificadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrmVerificadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
