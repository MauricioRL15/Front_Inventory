import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-frm-tiendas',
  templateUrl: './frm-tiendas.component.html',
  styleUrls: ['./frm-tiendas.component.css']
})
export class FrmTiendasComponent implements OnInit {

  public frmtiendas!:FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(){
    this.frmtiendas=this.formBuilder.group({
      nombre:['',Validators.required],
      telefono:['',Validators.required],
      correo:['',Validators.required],
      direccion:['',Validators.required],
      RFC:['',Validators.required],
      imagen:['',Validators.required],
    });
  }

}
