import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HEADERS, URL } from 'src/app/app.constants';
import { Injectable } from '@angular/core';
import { FilterSort } from 'src/app/shared/filterSort/model/filter-sort';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http:HttpClient) {}

  getProducts(page:number,filterSort:FilterSort={}){
    console.log("los filtros del servicio son "+ JSON.stringify(filterSort));
    const body= filterSort;
    const headers=  new HttpHeaders(`${HEADERS}`);
    const url= `${URL}?page=${page}`;
    return this.http.post<any>(url,body,{headers});
  }


  getProductById(product_id:string){
    const headers=  new HttpHeaders(`${HEADERS}`);
    return this.http.get<any>(`${URL}${product_id}`, {
      headers,});
    }

  getProductsByFilters(filters:any){
    const headers=  new HttpHeaders(`${HEADERS}`);
    return this.http.post<any>(`${URL}`,
      filters,
      {headers,});
  }

}
