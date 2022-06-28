import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-frm-clientes',
  templateUrl: './frm-clientes.component.html',
  styleUrls: ['./frm-clientes.component.css']
})
export class FrmClientesComponent implements OnInit {

  public frmclientes!:FormGroup;


  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(){
    this.frmclientes=this.formBuilder.group({
      nombre:['',Validators.required],
      telefono:['',Validators.required],
      telmovil:['',Validators.required],
      direccion:['',Validators.required],
      email:['',Validators.required],
      RFC:['',Validators.required],
      imagen:['',Validators.required],
    });
  }

}
