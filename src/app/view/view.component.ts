import { Component, OnInit } from '@angular/core';
import { ProductOperationsService } from '../product-operations.service';
import { Product } from '../product';
// import 'angular-route/$route';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  products: Array<Product>;

  constructor(private productService: ProductOperationsService) { 
    this.products = [];
  }

  ngOnInit() {
  }

  viewProduct() {
    this.productService.returnProduct().subscribe(data => {
      this.products = [];
      data.forEach(element => {
        this.products.push(element);
      }) 
    }, error => {});
  }

  deleteProduct(id) {
    this.productService.deleteProduct(id).subscribe(data => {
      this.viewProduct();
    }, error => {});
  }

}
