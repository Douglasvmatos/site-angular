import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    title: '',
    quantity: null!,
    price: null!,
  } 

  constructor (private productService: ProductService,
      private router: Router) { }

  ngOnInit(): void {
  }

  createProduct(){
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Product created successfully')
      this.router.navigate(['/products']);
    })
  }
  cancel(): void {
    this.router.navigate(['/products']);
  }
}
