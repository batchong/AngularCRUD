import { ViewProductComponent } from './view-product/view-product.component';
import { ViewAllProductsByDateComponent } from './view-all-products-by-date/view-all-products-by-date.component';
import { ViewAllProductsByCategoryComponent } from './view-all-products-by-category/view-all-products-by-category.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ListAllProductsComponent } from './list-all-products/list-all-products.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'delete-product', component: DeleteProductComponent },
  { path: 'list-all-product', component: ListAllProductsComponent },
  { path: 'update-product', component: UpdateProductComponent },
  { path: 'view-all-products-by-category', component: ViewAllProductsByCategoryComponent },
  { path: 'view-all-products-by-date', component: ViewAllProductsByDateComponent },
  { path: 'view-product', component: ViewProductComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
