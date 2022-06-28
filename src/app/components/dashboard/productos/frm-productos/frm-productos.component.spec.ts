import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmProductosComponent } from './frm-productos.component';

describe('FrmProductosComponent', () => {
  let component: FrmProductosComponent;
  let fixture: ComponentFixture<FrmProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrmProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrmProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
