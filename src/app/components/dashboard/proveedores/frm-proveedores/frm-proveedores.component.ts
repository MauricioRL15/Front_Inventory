import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-frm-proveedores',
  templateUrl: './frm-proveedores.component.html',
  styleUrls: ['./frm-proveedores.component.css']
})
export class FrmProveedoresComponent implements OnInit {

  public frmproveedores!:FormGroup;

  constructor(private formBuilder:FormBuilder) { }



  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(){
    this.frmproveedores=this.formBuilder.group({
      nombre:['',Validators.required],
      telefono:['',Validators.required],
      email:['',Validators.required],
      direccion:['',Validators.required],
      RFC:['',Validators.required],
      idtienda:['',Validators.required],
      banco:['',Validators.required],
      numerocuenta:['',Validators.required],
      laveinterbancaria:['',Validators.required],
    });
  }
  
}
