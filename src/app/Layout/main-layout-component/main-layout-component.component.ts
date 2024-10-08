import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from 'src/app/core/Services/cart.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main-layout-component',
  templateUrl: './main-layout-component.component.html',
  styleUrls: ['./main-layout-component.component.css']
})
export class MainLayoutComponentComponent implements OnInit, OnDestroy {
  public totalQuantity = 0;
  private subscription: Subscription = new Subscription();

  constructor(private cartService: CartService ,public router : Router) {}

  ngOnInit(): void {
    const shporta = localStorage.getItem("Shporta");

  
    const storedQuantity = localStorage.getItem('totalQuantity');
    this.totalQuantity =  Number(storedQuantity);

    this.subscription.add(
      this.cartService.itemCount$.subscribe({
        next: (response: number) => {
          this.totalQuantity = response; 
          console.log('Updated total quantity:', this.totalQuantity);
          
          localStorage.setItem('totalQuantity', String(this.totalQuantity));
        }
      })
    );
  }
  navigateToCart(){
    this.router.navigate(['Cart']);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
