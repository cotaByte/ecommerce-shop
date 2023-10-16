import { Component } from '@angular/core';
import { ProductService } from './product/services/product-service.service';
import { Product } from './product/model/product';
import { CategoriesComponent } from './categories/component/categories.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CartComponent } from './cart/component/cart.component';
import { Observable } from 'rxjs/internal/Observable';
import { CartServiceService } from './cart/service/cart-service.service';
import { FormsModule } from '@angular/forms';
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
  sortPropertySelected!:string;
  sortType:string="ASC";
  sortProperties: any=[
    {name:'Name',id:'1',value:'name'},
    {name:'Price',id:'2',value:'price'}
  ];

  constructor(
    private photoServices:ProductService,
    private dialog:MatDialog,
    private cartService:CartServiceService){
    }


  ngOnInit():void{
    this.cartItems = this.cartService.cartItems$;
    this.cartItems.subscribe(items => this.cartItemCount = items.length);
    this.loadProducts(this.currentPage);
  }
  
  
  loadProducts(page:number):void {
    this.photoServices.getProducts(page).subscribe(res=>{
    this.products= res.data.data;
    this.featured = this.products.
      find(prod => prod.featured === true) || this.featured;
      if (this.featured)this.products= this.products.filter(prod=>prod !== this.featured);
    });
  }

  openCategories() {
    const dialogRef = this.dialog.open(CategoriesComponent,{width:'100vw'});
  }

  openCart(){
    const dialogRef = this.dialog.open(CartComponent,{width:'400px'});
  }

  nextPage(){
    console.log("avanzo");
    if (this.currentPage+1<=9) this.currentPage++;
    console.log("pagina actual " + this.currentPage);
    this.loadProducts(this.currentPage);
  } 

  prevPage(){
    console.log("retrocedo");
    if (this.currentPage-1>=1) this.currentPage--;
    this.loadProducts(this.currentPage);
  }

}