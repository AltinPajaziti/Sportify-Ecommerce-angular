import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSelectModule} from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ProductComponent } from './Components/product/product.component';
import { ProductsService } from './core/Services/products.service';
import {MatCardModule} from '@angular/material/card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SliderComponent } from './Components/slider/slider.component';
import {MatMenuModule} from '@angular/material/menu';
import { ProductsComponent } from './Components/products/products.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { MainLayoutComponentComponent } from './Layout/main-layout-component/main-layout-component.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { MatBadgeModule } from '@angular/material/badge';

import { ProductDialogComponent } from './Components/product-dialog/product-dialog.component';
import { CartComponent } from './Components/cart/cart.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { FavoriteProductsComponent } from './Components/favorite-products/favorite-products.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductComponent,
    SliderComponent,
    ProductsComponent,
    MainLayoutComponentComponent,
    ProductDialogComponent,
    CartComponent,
    FavoriteProductsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
     MatButtonModule,
      MatIconModule,
      MatListModule,
      MatSidenavModule,
      MatCardModule,
      NgbModule,
      MatMenuModule,
      MatGridListModule,
      MatDialogModule,
       MatButtonModule,
       MatTableModule,
       MatBadgeModule,
       MatFormFieldModule,
       MatInputModule,
       MatSelectModule,
       ReactiveFormsModule,
      
       
      
      
      
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
