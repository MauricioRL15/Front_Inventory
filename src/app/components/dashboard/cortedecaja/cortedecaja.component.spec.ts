import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CortedecajaComponent } from './cortedecaja.component';

describe('CortedecajaComponent', () => {
  let component: CortedecajaComponent;
  let fixture: ComponentFixture<CortedecajaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CortedecajaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CortedecajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
