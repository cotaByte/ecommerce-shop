import { Component } from '@angular/core';
import { ProductService } from './product/services/product-service.service';
import { Product } from './product/model/product';
import { CategoriesComponent } from './categories/component/categories.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CartComponent } from './cart/component/cart.component';
import { Observable } from 'rxjs/internal/Observable';
import { CartServiceService } from './cart/service/cart-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  currentPage:number=1;
  cartItems!: Observable<Product[]>;
  cartItemCount:number=0;
  featured!: Product | undefined;
  products:Product[]=[];

  constructor(
    private photoServices:ProductService,
    private dialog:MatDialog,
    private cartService:CartServiceService){
    }


  ngOnInit():void{
    this.cartItems = this.cartService.cartItems$;
    this.cartItems.subscribe(items => this.cartItemCount = items.length);
    this.photoServices.getProducts(this.currentPage).subscribe(res=>{
      this.products= res.data.data;
      this.featured = this.products.find(prod => prod.featured === true) || this.featured;
      if (this.featured)this.products= this.products.filter(prod=>prod !== this.featured);     
    });
  }

  openCategories() {
    const dialogRef = this.dialog.open(CategoriesComponent,{width:'100vw'});
  }

  openCart(){
    const dialogRef = this.dialog.open(CartComponent,{width:'400px'});
  }

}