import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; 
import { Product } from '../constants/Interfaces/Product';
import { HttpClient } from '@angular/common/http'; 
import { environment } from 'src/environments/envirement';
import type { FilterProductsInterface } from '../constants/Interfaces/FilterProductsInterface';

@Injectable({
  providedIn: 'root'
  
})
export class ProductsService {
  private api_url = environment.api_Url + 'Products/'; 
  constructor(private http: HttpClient) { } 

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.api_url + 'Get-All-Products'); 
  }

  getproductbyid(id: string) : Observable<Product>{
    return this.http.post<Product>(this.api_url + 'Get-All-Products' , id); 
  }

  CreatePoruduct(Product : Product) : Observable<Product>{
    return this.http.post<Product>(this.api_url + 'Get-All-Products' , Product); 
  }

  FilterProducts(FilterProducts : any){
    return this.http.post<any>(this.api_url + 'GetFiltered-Products' , FilterProducts )
  }


}
