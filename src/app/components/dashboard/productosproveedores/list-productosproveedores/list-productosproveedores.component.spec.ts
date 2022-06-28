import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductosproveedoresComponent } from './list-productosproveedores.component';

describe('ListProductosproveedoresComponent', () => {
  let component: ListProductosproveedoresComponent;
  let fixture: ComponentFixture<ListProductosproveedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProductosproveedoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductosproveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
