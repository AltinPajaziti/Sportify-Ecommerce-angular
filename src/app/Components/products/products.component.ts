import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from 'src/app/core/constants/Interfaces/Product';
import { ProductsService } from 'src/app/core/Services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  Products: any[] = []; // Use specific type for products
  Forma!: FormGroup;

  constructor(public productService: ProductsService, private fb: FormBuilder) {
    this.GetallProducts();
  }

  ngOnInit(): void {
    this.Forma = this.fb.group({
      Input: [''],
      PriceFrom: [0],
      PriceTo: [0],
    });
  }

  GetallProducts(Produktet: any[]| null  = null) {
    if (Produktet == null) {
      this.productService.getProducts().subscribe({
        next: (response: Product[]) => {
          this.Products = response;
          console.log("Here", this.Products);
        },
        error: (err) => {
          console.error('Error fetching products:', err);
        },
      });
    } else {
      this.Products = Produktet; 
    }
  }

  GetFilterData(): void {
    console.log('Filter Values:', this.Forma.value);
    this.productService.FilterProducts(this.Forma.value).subscribe({
      next: (response: any[]) => { 

        this.Products = response; 
        console.log("Filtered Products", this.Products)
        this.GetallProducts(this.Products)
      },
      error: (err) => {
        console.error('Error filtering products:', err);
      }
    });
  }
}
