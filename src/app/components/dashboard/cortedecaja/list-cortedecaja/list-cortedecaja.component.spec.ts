import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCortedecajaComponent } from './list-cortedecaja.component';

describe('ListCortedecajaComponent', () => {
  let component: ListCortedecajaComponent;
  let fixture: ComponentFixture<ListCortedecajaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCortedecajaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCortedecajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
