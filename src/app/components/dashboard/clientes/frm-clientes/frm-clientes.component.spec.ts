import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmClientesComponent } from './frm-clientes.component';

describe('FrmClientesComponent', () => {
  let component: FrmClientesComponent;
  let fixture: ComponentFixture<FrmClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrmClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrmClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
