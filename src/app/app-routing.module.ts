import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddToCartPageComponent } from './core/components/add-to-cart-page/add-to-cart-page.component';
import { CartPageComponent } from './core/components/cart-page/cart-page.component';

const routes: Routes = [
  { path: '', component: AddToCartPageComponent },
  { path: 'cart', component: CartPageComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
