import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmAbonosComponent } from './frm-abonos.component';

describe('FrmAbonosComponent', () => {
  let component: FrmAbonosComponent;
  let fixture: ComponentFixture<FrmAbonosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrmAbonosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrmAbonosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
