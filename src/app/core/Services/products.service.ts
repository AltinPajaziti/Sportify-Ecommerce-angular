import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs'; 
import { Product } from '../constants/Interfaces/Product';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { environment } from 'src/environments/envirement';
import  { FilterProductsInterface } from '../constants/Interfaces/FilterProductsInterface';
import  { AuthenticationService } from './authentication.service';
import type { AddToFavoritesResponse } from '../constants/Interfaces/successreturn';
import type { Favorite } from '../constants/Interfaces/Favorites';

@Injectable({
  providedIn: 'root'
  
})
export class ProductsService {
  private api_url = environment.api_Url + 'Products/'; 
  public FavProduct = new BehaviorSubject<number>(0)
  public trigger = new BehaviorSubject<boolean>(false)

  constructor(private http: HttpClient) { 
    let fav = JSON.parse(localStorage.getItem('Favorites') || '[]')
     let shuma= fav.reduce((sum: number, product: any) => {
      return sum + (product.Quantity || 0);
  }, 0);


  this.FavProduct.next(shuma)
  } 

  public GetCount(): Observable<any> {
    return this.FavProduct.asObservable()
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.api_url + 'Get-All-Products'); 
  }
  
  
  Headers():HttpHeaders{
  

    const  token = localStorage.getItem('Token')
    return new HttpHeaders({
      'Authorization' : `bearer ${token}`
    })

    
  }

  getproductbyid(id: string) : Observable<Product>{
    return this.http.post<Product>(this.api_url + 'Get-All-Products' , id); 
  }

  CreatePoruduct(Product : Product) : Observable<Product>{
    return this.http.post<Product>(this.api_url + 'Get-All-Products' , Product); 
  }
  AddProductToFavorites(Productid: number): Observable<any> {
    this.trigger.next(true)
    let Favorites = JSON.parse(localStorage.getItem('Favorites') || '[]');

    if (!Array.isArray(Favorites)) {
      console.error('Favorites is not an array, resetting...');
      Favorites = [];
    }

    let existingProduct : Favorite = Favorites.find((e: any) => e.productid === Productid);

    if (existingProduct != null) {
      existingProduct.Quantity++;
    } else {
      let newFavorite: Favorite = {
        productid: Productid,
        Quantity: 1
      };

      Favorites.push(newFavorite);
      console.log("Product added to Favorites");
    }

    localStorage.setItem('Favorites', JSON.stringify(Favorites));

    let favv = JSON.parse(localStorage.getItem('Favorites') || '[]')
     let shumatotle= favv.reduce((sum: number, product: any) => {
      return sum + (product.Quantity || 0);
  }, 0);

  this.FavProduct.next(shumatotle)
    

    const url = this.api_url + `AddToFavorites/${Productid}`;
    return this.http.post<AddToFavoritesResponse>(url, {}, { headers: this.Headers() });
}

  

  FilterProducts(FilterProducts : any){
    return this.http.post<any>(this.api_url + 'GetFiltered-Products' , FilterProducts )
  }


}
