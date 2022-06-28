import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmUsuariosComponent } from './frm-usuarios.component';

describe('FrmUsuariosComponent', () => {
  let component: FrmUsuariosComponent;
  let fixture: ComponentFixture<FrmUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrmUsuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrmUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
