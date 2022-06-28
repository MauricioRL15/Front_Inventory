import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlapiServiceService {

  public static URI: string = 'https://servitec-inventory.herokuapp.com/api/';

  constructor() { }
}
