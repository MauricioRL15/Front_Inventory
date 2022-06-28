import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmProveedoresComponent } from './frm-proveedores.component';

describe('FrmProveedoresComponent', () => {
  let component: FrmProveedoresComponent;
  let fixture: ComponentFixture<FrmProveedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrmProveedoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrmProveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
