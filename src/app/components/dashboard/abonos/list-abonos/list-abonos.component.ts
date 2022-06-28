import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  cliente: string;
  descripcion: string;
  cantidad: number;
  eliminar: number;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {cliente: 'Mauricio Ramírez López', descripcion: 'Primer abono', cantidad: 600 ,eliminar: 1 },
  {cliente: 'Sandra Aguilar Santos', descripcion: 'Segundo abono', cantidad: 300 ,eliminar: 1 },

];


@Component({
  selector: 'app-list-abonos',
  templateUrl: './list-abonos.component.html',
  styleUrls: ['./list-abonos.component.css']
})
export class ListAbonosComponent implements OnInit {

  displayedColumns: string[] = ['cliente', 'descripcion', 'cantidad', 'eliminar'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
