import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  numnota: number;
  clave: number;
  descripcion: string;
  cantidad: number;
  unidad: string;
  preciounitario: number;
  importe: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {numnota: 1, clave: 1, descripcion: 'Coca Cola', cantidad: 10 ,unidad: 'Litros', preciounitario: 13, importe:130 },
  {numnota: 2, clave: 2, descripcion: 'Coca Cola', cantidad: 10 ,unidad: 'Litros', preciounitario: 13, importe:130 },
  {numnota: 3, clave: 3, descripcion: 'Coca Cola', cantidad: 10 ,unidad: 'Litros', preciounitario: 13, importe:130 },
  {numnota: 4, clave: 4, descripcion: 'Coca Cola', cantidad: 10 ,unidad: 'Litros', preciounitario: 13, importe:130 },
  {numnota: 5, clave: 5, descripcion: 'Coca Cola', cantidad: 10 ,unidad: 'Litros', preciounitario: 13, importe:130 },
];

@Component({
  selector: 'app-list-ingresos',
  templateUrl: './list-ingresos.component.html',
  styleUrls: ['./list-ingresos.component.css']
})
export class ListIngresosComponent implements OnInit {

  displayedColumns: string[] = ['numnota', 'clave', 'descripcion', 'cantidad', 'unidad', 'preciounitario', 'importe'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
