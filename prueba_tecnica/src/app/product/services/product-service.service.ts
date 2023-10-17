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
    const body= filterSort;
    const headers=  new HttpHeaders(`${HEADERS}`);
    const url= `${URL}?page=${page}`;
    return this.http.post<any>(url,body,{headers});
  }
}
