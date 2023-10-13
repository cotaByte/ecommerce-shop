import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HEADERS, URL } from 'src/app/app.constants';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http:HttpClient) {}

  getProducts(page:number=1){
    
    const params = new HttpParams().set('page',page);
    const headers=  new HttpHeaders(`${HEADERS}`);
    return this.http.post<any>(`${URL}`,
    {
      headers,
      params
    });
  }


  getProductById(product_id:string){
    const headers=  new HttpHeaders(`${HEADERS}`);
    return this.http.get<any>(`${URL}`+product_id, {
      headers:headers});
    }

  getProductsByFilters(filters:any){
    const headers=  new HttpHeaders(`${HEADERS}`);
    return this.http.post<any>(`${URL}`,
      filters,
      {headers:headers});
  }

}
