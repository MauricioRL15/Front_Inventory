import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-frm-ingresos',
  templateUrl: './frm-ingresos.component.html',
  styleUrls: ['./frm-ingresos.component.css']
})
export class FrmIngresosComponent implements OnInit {
  public formingresos!:FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(){
    this.formingresos=this.formBuilder.group({
      numerorecibo:['',Validators.required],
      descuento:['',Validators.required],
      formapago:['',Validators.required],
      tipopago:['',Validators.required],
      tipoentrega:['',Validators.required],
      Idcliente:['',Validators.required],
      idproducto:['',Validators.required],
      cantidad:['',Validators.required],
     
    });
  }

}
