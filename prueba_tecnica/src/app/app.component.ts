import { Component } from '@angular/core';
import { ProductService } from './product/services/product-service.service';
import { Product } from './product/model/product';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  isModalOpen:boolean=false;
  currentPage:number=1;
  cart:Product[]=[];
  featured!: Product | undefined;
  products:Product[]=[];

  constructor(private photoServices:ProductService){}


  ngOnInit():void{
    this.photoServices.getProducts(this.currentPage).subscribe(res=>{
      this.products= res.data.data;
      this.featured = this.products.find(prod => prod.featured === true) || this.featured;
      if (this.featured)this.products= this.products.filter(prod=>prod !== this.featured);     
    });
  }
  
  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
  
}

