import { Component } from '@angular/core';
import { ProductService } from './product/services/product-service.service';
import { Product } from './product/model/product';
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
  categories: any=[
    {name:'People',id:'1',value:'people'},
    {name:'Premium',id:'2',value:'premium'},
    {name:'Pets',id:'3',value:'pets'},
    {name:'Food',id:'4',value:'food'},
    {name:'Landmarks',id:'5',value:'landmarks'},
    {name:'Cities',id:'6',value:'cities'},
    {name:'Nature',id:'7',value:'nature'},
  ];
  constructor(private photoServices:ProductService){}


  ngOnInit():void{
    this.photoServices.getProducts(this.currentPage).subscribe(res=>{
      this.products= res.data.data;
      this.featured = this.products.find(prod => prod.featured === true) || this.featured;
      if (this.featured)this.products= this.products.filter(prod=>prod !== this.featured);     
    });
  }
}
