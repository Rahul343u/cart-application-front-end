import { Injectable } from '@angular/core';
import { Item } from '../../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ApplicationStateService {
  addTocartPageData: Array<Item> = [];
  cartPageData: Array<Item> = [];

  constructor() {}

  getAddTocartPageData() {
    return [...this.addTocartPageData];
  }

  setAddTocartPageData(addTocartPageData) {
    this.addTocartPageData = [...addTocartPageData];
  }

  getCartPageData() {
    return [...this.cartPageData];
  }

  setCartPageData(data: Array<Item>) {
    this.cartPageData = [...data];
  }
}
