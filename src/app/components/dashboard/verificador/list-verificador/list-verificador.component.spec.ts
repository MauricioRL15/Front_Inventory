import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVerificadorComponent } from './list-verificador.component';

describe('ListVerificadorComponent', () => {
  let component: ListVerificadorComponent;
  let fixture: ComponentFixture<ListVerificadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListVerificadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVerificadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
