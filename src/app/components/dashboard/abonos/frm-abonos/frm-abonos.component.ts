import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-frm-abonos',
  templateUrl: './frm-abonos.component.html',
  styleUrls: ['./frm-abonos.component.css']
})
export class FrmAbonosComponent implements OnInit {
  public fromabonos!:FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }

  private buildForm(){
    this.fromabonos=this.formBuilder.group({
      idcliente:['',Validators.required],
      descripcion:['',Validators.required],
      montoabonado:['',Validators.required],
     
    });
  }

}
