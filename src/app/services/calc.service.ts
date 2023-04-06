import { Injectable } from '@angular/core';

@Injectable()
export class CalcService {

  constructor() { }

  somme(x:number, y:number)
  {
    return x+y;
  }
}
