import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs';
import { Product } from 'src/app/product/model/product';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
    private cartItemsSubject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
    public cartItems$: Observable<Product[]> = this.cartItemsSubject.asObservable();
  
    addToCart(product: Product):void {
      const currentCart = this.cartItemsSubject.value;
      const updatedCart = [...currentCart, product];
      this.cartItemsSubject.next(updatedCart);
      console.table(updatedCart);
}

  clearCart():void{
    this.cartItemsSubject.next([]);
  }




}
