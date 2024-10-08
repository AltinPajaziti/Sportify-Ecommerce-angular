import { Component, inject } from '@angular/core';
import { Product } from 'src/app/core/constants/Interfaces/Product';
import { ProductsService } from 'src/app/core/Services/products.service';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  Products: Product[] = [];

  constructor(public productService: ProductsService) {
    this.GetallProducts();
  }



  GetallProducts() {
    this.productService.getProducts().subscribe({
      next: (response: Product[]) => {
        
        this.Products = response;

        console.log("Here" , this.Products)
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      },
    });
  }
}
