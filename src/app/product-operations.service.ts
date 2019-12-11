import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductOperationsService {
  product: Product;
  productSubject: BehaviorSubject<Product>;

  constructor(private httpclient: HttpClient) { 
    this.product = new Product;
    this.productSubject = new BehaviorSubject(this.product);
    this.returnProduct();
  }

  addProduct(p: Product): Observable<Product> {
    return this.httpclient.post<Product>("http://localhost:3000/Product",p);
  }

  returnProduct(): Observable<Array<Product>> {
    return this.httpclient.get<Array<Product>>("http://localhost:3000/Product");
  }

  deleteProduct(id: number): Observable<Product> {
    return this.httpclient.delete<Product>("http://localhost:3000/Product/"+id);
  }
}
