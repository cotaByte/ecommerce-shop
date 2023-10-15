import { Component } from '@angular/core';
import { ProductService } from './product/services/product-service.service';
import { Product } from './product/model/product';
import { CategoriesComponent } from './categories/component/categories.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CartComponent } from './cart/component/cart.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  currentPage:number=1;
  cart:Product[]=[];
  featured!: Product | undefined;
  products:Product[]=[];

  constructor(private photoServices:ProductService, private dialog:MatDialog){}


  ngOnInit():void{
    this.photoServices.getProducts(this.currentPage).subscribe(res=>{
      this.products= res.data.data;
      this.featured = this.products.find(prod => prod.featured === true) || this.featured;
      if (this.featured)this.products= this.products.filter(prod=>prod !== this.featured);     
    });
  }
  


  openCategories() {
    const dialogConfig = new MatDialogConfig();
    
    dialogConfig.width='100vw';
    const dialogRef = this.dialog.open(CategoriesComponent,dialogConfig
      );
  }

  openCart(){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.width='400px';
    const dialogRef = this.dialog.open(CartComponent,dialogConfig
      );
  }
}

