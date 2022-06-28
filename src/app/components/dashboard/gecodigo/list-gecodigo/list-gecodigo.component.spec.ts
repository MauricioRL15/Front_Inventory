import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGecodigoComponent } from './list-gecodigo.component';

describe('ListGecodigoComponent', () => {
  let component: ListGecodigoComponent;
  let fixture: ComponentFixture<ListGecodigoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGecodigoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGecodigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
