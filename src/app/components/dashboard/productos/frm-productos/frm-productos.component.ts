import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-frm-productos',
  templateUrl: './frm-productos.component.html',
  styleUrls: ['./frm-productos.component.css']
})
export class FrmProductosComponent implements OnInit {

  public formproductos!:FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }
  private buildForm(){
    this.formproductos=this.formBuilder.group({
      nombre:['',Validators.required],
      codigo:['',Validators.required],
      existencia:['',Validators.required],
      unidad:['',Validators.required],
      descripcion:['',Validators.required],
      precio:['',Validators.required],
      precioalpublico:['',Validators.required],
      imagen:['',Validators.required],
     
    });
  }

}
