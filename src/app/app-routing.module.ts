import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ProductComponent } from './Components/product/product.component';
import { ProductsComponent } from './Components/products/products.component';
import { MainLayoutComponentComponent } from './Layout/main-layout-component/main-layout-component.component';
import { CartComponent } from './Components/cart/cart.component';
import { FavoriteProductsComponent } from './Components/favorite-products/favorite-products.component';

const routes: Routes = [
  { path: '', component: DashboardComponent }, 
  
    {path:'' , component: MainLayoutComponentComponent , children:[
    {path:'products' , component: ProductsComponent },
    {path:'Cart' , component: CartComponent },
    { path : 'Favorite' , component : FavoriteProductsComponent},
    { path: 'auth', loadChildren: () => import('../app/modules/auth/auth/auth.module').then(m => m.AuthModule) },

  ]},

  { path: 'login', redirectTo: 'auth/login', pathMatch: 'full' }, 
  { path: 'register', redirectTo: 'auth/register', pathMatch: 'full' }, 
 
  // { path: '**', redirectTo: 'auth/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
