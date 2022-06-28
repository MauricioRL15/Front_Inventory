import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmProductosproveedoresComponent } from './frm-productosproveedores.component';

describe('FrmProductosproveedoresComponent', () => {
  let component: FrmProductosproveedoresComponent;
  let fixture: ComponentFixture<FrmProductosproveedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrmProductosproveedoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrmProductosproveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
