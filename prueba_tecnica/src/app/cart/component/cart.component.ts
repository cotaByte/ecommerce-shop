import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CartServiceService } from '../service/cart-service.service';
import { Product } from 'src/app/product/model/product';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})
export class CartComponent {
  cartItemCount:number=0;
  cartItems!: Observable<Product[]>;

  constructor(private cartService: CartServiceService, private dialogRef:  MatDialogRef<CartComponent>) {}

  ngOnInit() {
    this.cartItems = this.cartService.cartItems$;
    this.cartItems.subscribe(items => this.cartItemCount = items.length);
    //this.cartItems.subscribe(Product => this.cartTotalAmount += Product.price);
  }

  clearCart(){
    this.cartService.clearCart();
    this.dialogRef.close();
  }

}
