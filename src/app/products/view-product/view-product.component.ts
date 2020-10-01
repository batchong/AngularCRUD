import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  
  productDetails: Product;
  productId = 0;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService) {}

  ngOnInit(): void {

   this.activatedRoute.params.subscribe(productData => {
    this.productId = productData.id;
    console.log();
   })
   this.productsService.viewProduct(this.productId).subscribe(data => {
    this.productDetails = data;
    console.log();
   })
}}
