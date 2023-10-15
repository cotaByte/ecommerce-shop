import { Component, Input } from '@angular/core';
import { Product } from '../model/product';
import { CartServiceService } from 'src/app/cart/service/cart-service.service';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent {
  @Input () product: Product|undefined;
  @Input () minimized:boolean=false;

  constructor(private cartService: CartServiceService) {}

  addToCart() {
    if(this.product)this.cartService.addToCart(this.product);
  }

}
