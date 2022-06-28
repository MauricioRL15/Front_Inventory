import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  position: number;
  cliente: string;
  adeudo: number;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, cliente: '05', adeudo: 750, },
  {position: 2, cliente: '02', adeudo: 9000, },
  {position: 3, cliente: '06', adeudo: 650, },
];

@Component({
  selector: 'app-list-productosproveedores',
  templateUrl: './list-productosproveedores.component.html',
  styleUrls: ['./list-productosproveedores.component.css']
})
export class ListProductosproveedoresComponent implements OnInit {

  displayedColumns: string[] = ['position', 'cliente', 'adeudo'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
