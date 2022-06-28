import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GecodigoComponent } from './gecodigo.component';

describe('GecodigoComponent', () => {
  let component: GecodigoComponent;
  let fixture: ComponentFixture<GecodigoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GecodigoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GecodigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
