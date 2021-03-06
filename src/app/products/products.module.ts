import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ListAllProductsComponent } from './list-all-products/list-all-products.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ViewAllProductsByDateComponent } from './view-all-products-by-date/view-all-products-by-date.component';
import { ViewAllProductsByCategoryComponent } from './view-all-products-by-category/view-all-products-by-category.component';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductsComponent, 
    AddProductComponent, 
    ViewProductComponent, 
    ListAllProductsComponent, 
    UpdateProductComponent, 
    DeleteProductComponent, 
    ViewAllProductsByDateComponent, 
    ViewAllProductsByCategoryComponent,
  
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule
  ]
})
export class ProductsModule { }
