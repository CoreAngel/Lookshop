import { Injectable } from '@angular/core';

@Injectable()
export class HeaderService {

  currentCurency: string = "USD";
  currencyToChar = {
    "USD" : "$",
    "EUR" : "€",
    "PLN" : "PLN"
  };

  constructor() { }

  getChar = function () {
    return this.currencyToChar[this.currentCurency];
  }

}
