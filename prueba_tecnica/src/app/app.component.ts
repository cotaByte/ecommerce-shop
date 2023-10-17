import { Component } from '@angular/core';
import { ProductService } from './product/services/product-service.service';
import { Product } from './product/model/product';
import { CategoriesComponent } from './categories/component/categories.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CartComponent } from './cart/component/cart.component';
import { Observable } from 'rxjs/internal/Observable';
import { CartServiceService } from './cart/service/cart-service.service';
import { FormsModule } from '@angular/forms';
import { FilterSortServiceService } from './shared/filterSort/service/filter-sort-service.service';
import { Subscription } from 'rxjs';
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
  sortType:'ASC'| 'DESC' ='ASC';
  currentFilterSort:Subscription|undefined;
  sortProperties: any=[
    {name:'Name',id:'1',value:'name'},
    {name:'Price',id:'2',value:'price'}
  ];

  constructor(
    private productServices:ProductService,
    private dialog:MatDialog,
    private cartService:CartServiceService,
    private filtersortService:FilterSortServiceService){
    }


  ngOnInit():void{
    this.cartItems = this.cartService.cartItems$;
    this.cartItems.subscribe(items => this.cartItemCount = items.length);
    this.currentFilterSort=this.filtersortService.filterSort$
    .subscribe(()=>{
      this.loadProducts(this.currentPage);
    })
    this.loadProducts(this.currentPage);
  }
  

  ngOnDestroy():void{
    return this.currentFilterSort && this.currentFilterSort.unsubscribe();
  }
  
  loadProducts(page:number):void {
    const filterSort= this.filtersortService.getFilterSort();
    this.productServices.getProducts(page,filterSort).subscribe(res=>{
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
    if (this.currentPage+1<=9) this.currentPage++;
    this.loadProducts(this.currentPage);
  } 

  prevPage(){
    if (this.currentPage-1>=1) this.currentPage--;
    this.loadProducts(this.currentPage);
  }


  changeSorting(){
    this.sortType= this.sortType==='ASC'? 'DESC':'ASC';
    this.setChangeSorting();
  }

  setChangeSorting(){
    const sortingProperty= this.sortPropertySelected || this.sortProperties[0];
    this.filtersortService.setSort(sortingProperty,this.sortType);
  }
}