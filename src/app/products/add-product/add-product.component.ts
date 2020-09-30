import { ProductsService } from './../products.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {



  constructor(private productsService: ProductsService) { }
 
  ngOnInit(): void {
  }

  addNewProduct(form) {
      console.log(form.value);

      let newProduct = {
        id: 9,
        name: form.value.product_name,
        categoryId: form.value.product_category,
        description: form.value.product_description,
        raing: form.value.product_rating,
        price: form.value.product_price,
        reviews: form.value.product_reviews,
        productImg: "",
        is_available: form.value.product_value
      };

      console.log(newProduct); 

      this.productsService.addProduct(newProduct).subscribe(data => {
        console.log(data);
      })
      
  }
}
