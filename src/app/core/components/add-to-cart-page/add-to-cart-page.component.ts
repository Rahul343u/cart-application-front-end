import { Component, OnInit, OnDestroy } from '@angular/core';
import { Item } from '../../models/item.model';
import { ApplicationStateService } from '../../services/application-state/application-state.service';
import { ApiCallService } from '../../services/api-call/api-call.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-to-cart-page',
  templateUrl: './add-to-cart-page.component.html',
  styleUrls: ['./add-to-cart-page.component.scss']
})
export class AddToCartPageComponent implements OnInit, OnDestroy {
  //holds data for all cards
  addTocartPageData: Array<Item>;

  //holds data added to cart
  cartPageData: Array<Item> = [];

  //used to display notification item name
  currentItem: string = '';


  timeoutSubscription: any;
  totalItems: number;
  constructor(
    private appState: ApplicationStateService,
    private apiCall: ApiCallService,
    private router: Router
  ) {}

  ngOnInit() {
    // getting data from app state or api

    this.addTocartPageData = this.appState.getAddTocartPageData();
    this.cartPageData = this.appState.getCartPageData();
    console.log(this.addTocartPageData);
    if (this.addTocartPageData.length === 0) {
      this.apiCall.getAllItems().subscribe((data: Array<Item>) => {
        this.addTocartPageData = data;
        this.appState.setAddTocartPageData(data);
      });
    }
  }

  //Add to cart function used to add data to cart
  addToCart(data) {
    this.cartPageData.push(data);
    this.currentItem = data.name;
    clearTimeout(this.timeoutSubscription);
    this.timeoutSubscription = setTimeout(() => {
      this.currentItem = '';
    }, 2000);
  }

  goToCart() {
    this.router.navigate(['cart']);
  }

  getTotalItems() {
    this.totalItems = 0;
    this.cartPageData.forEach((data, index) => {
      this.totalItems = this.totalItems + (data.count ? data.count : 1);
    });
    return this.totalItems;
  }

  ngOnDestroy() {
    this.appState.setCartPageData(this.cartPageData);
  }
}
