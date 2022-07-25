import { Product } from './../module/product';
import { ProductServiceService } from './../service/productService.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
   products: Product[] = [];
  producer!: Product;
  product: any;

  constructor(private productService: ProductServiceService) { }

  ngOnInit(): void {
    this.showProduct();
  }

  showProduct() {
    this.productService.getProducts().subscribe(products => this.products = products);

  }

  addProduct() {
    return this.productService.addProduct(this.product).subscribe(products => this.products.push(products));
  }

}
