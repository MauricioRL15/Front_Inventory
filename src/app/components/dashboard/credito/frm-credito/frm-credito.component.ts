import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  position: number;
  cliente: string;
  adeudo: number;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, cliente: 'Mauricio Ramírez López', adeudo: 750, },
  {position: 2, cliente: 'Sandra Aguilar Santos', adeudo: 9000, },
  {position: 3, cliente: 'Ricardo Luna Santos', adeudo: 650, },
];

@Component({
  selector: 'app-frm-credito',
  templateUrl: './frm-credito.component.html',
  styleUrls: ['./frm-credito.component.css']
})
export class FrmCreditoComponent implements OnInit {

  displayedColumns: string[] = ['position', 'cliente', 'adeudo'];
  dataSource = ELEMENT_DATA;
  
  constructor() { }

  ngOnInit(): void {
  }

}
