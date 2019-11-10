import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddToCartPageComponent } from './components/add-to-cart-page/add-to-cart-page.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [AddToCartPageComponent, CartPageComponent],
  imports: [CommonModule, FormsModule, AngularFontAwesomeModule]
})
export class CoreModule {}
