import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-frm-productosproveedores',
  templateUrl: './frm-productosproveedores.component.html',
  styleUrls: ['./frm-productosproveedores.component.css']
})
export class FrmProductosproveedoresComponent implements OnInit {

  public frmpoductosprovedores!:FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(){
    this.frmpoductosprovedores=this.formBuilder.group({
     idproductos_proveedores: ['',Validators.required],
     idproveedores:['',Validators.required],
     idproductos: ['',Validators.required],
     cantidad: ['',Validators.required],
    
    });
  }

}
