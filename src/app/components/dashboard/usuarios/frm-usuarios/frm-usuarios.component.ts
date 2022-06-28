import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-frm-usuarios',
  templateUrl: './frm-usuarios.component.html',
  styleUrls: ['./frm-usuarios.component.css']
})
export class FrmUsuariosComponent implements OnInit {

  public formusuarios!:FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(){
    this.formusuarios=this.formBuilder.group({
      nombre:['',Validators.required],
      telefono:['',Validators.required],
      celular:['',Validators.required],
      direccion:['',Validators.required],
      correo:['',Validators.required],
      usuario:['',Validators.required],
      password:['',Validators.required],
      role:['',Validators.required],
      idtienda:['',Validators.required],
      imagen:['',Validators.required],
     
    });
  }

}
