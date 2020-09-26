import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-list-all-products',
  templateUrl: './list-all-products.component.html',
  styleUrls: ['./list-all-products.component.css']
})
export class ListAllProductsComponent implements OnInit {

  productList: Product;
  constructor(private productsService: ProductsService) { 
    this.productsService.getAllProduts().subscribe(data => {
      this.productList = data
    })
  }

  ngOnInit(): void {
  }

}
