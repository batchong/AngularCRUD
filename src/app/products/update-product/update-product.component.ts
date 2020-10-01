import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  productFuckingDetailsPleaseFuckingWork: Product;
  productId = 0; 
   
  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService) { }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.productId = data.id;
    
    this.productsService.viewProduct(this.productId).subscribe(productData => {
      this.productFuckingDetailsPleaseFuckingWork = productData;
    });
    });
  }
  updateProduct(form){

    console.log(form);
    
    const updateProduct = {
      id: form.value.productId,
      name: form.value.name,
      categoryId: form.value.categoryId,
      description: form.value.description,
      rating: form.value.rating,
      price: form.value.price,
      reviews: form.value.reviews,
      productImg: "",
      isAvailable: form.value.isAvailable
    };
    

    this.productsService.updateProduct(this.productId, updateProduct).subscribe(data => {
      console.log(data);
    })
    
  }

}
