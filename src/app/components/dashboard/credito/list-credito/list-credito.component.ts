import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  cliente: string;
  adeudo: number;
  descripcion: string;
  cantidad: number;
  eliminar: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {cliente: 'Mauricio Ramírez López', adeudo: 750, descripcion: 'primer abono',
  cantidad: 600, eliminar: 1}
];


@Component({
  selector: 'app-list-credito',
  templateUrl: './list-credito.component.html',
  styleUrls: ['./list-credito.component.css']
})
export class ListCreditoComponent implements OnInit {
  
  displayedColumns: string[] = ['cliente', 'adeudo'];
  dataSource = ELEMENT_DATA;


  constructor() { }

  ngOnInit(): void {
  }

}
