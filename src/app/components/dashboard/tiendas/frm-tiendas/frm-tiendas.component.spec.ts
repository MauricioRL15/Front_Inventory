import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmTiendasComponent } from './frm-tiendas.component';

describe('FrmTiendasComponent', () => {
  let component: FrmTiendasComponent;
  let fixture: ComponentFixture<FrmTiendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrmTiendasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrmTiendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
