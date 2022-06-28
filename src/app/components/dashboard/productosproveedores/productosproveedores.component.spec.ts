import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosproveedoresComponent } from './productosproveedores.component';

describe('ProductosproveedoresComponent', () => {
  let component: ProductosproveedoresComponent;
  let fixture: ComponentFixture<ProductosproveedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosproveedoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosproveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
