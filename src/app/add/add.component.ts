import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormGroupDirective } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';
import { ProductOperationsService } from '../product-operations.service';
import { Product } from '../product';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  name: FormControl;
  description: FormControl;
  price: FormControl;
  addForm: FormGroup;
  newProduct: Product;
  panelState: boolean;


  constructor(private productService: ProductOperationsService, private snackbar: MatSnackBar) { 
    this.newProduct = new Product();
    this.name = new FormControl("",[Validators.required]);
    this.description = new FormControl("", [Validators.required]);
    this.price = new FormControl("", [Validators.required]);

    this.addForm = new FormGroup(
      {
        name: this.name,
        description: this.description,
        price: this.price
      }
    );
  }

  ngOnInit() {
  }

  addProduct() {
    console.log(this.addForm.value);
    this.newProduct.name = this.addForm.value.name.toUpperCase();
    this.newProduct.description = this.addForm.value.description.toLowerCase();
    this.newProduct.price = this.addForm.value.price;
    this.productService.addProduct(this.newProduct).subscribe( data => {
      this.openSnackBar("Product Added", "OK");
      this.panelState = !this.panelState;
    }, error => {});
  }

  openSnackBar(message: string, action: string) {
    this.snackbar.open(message, action, {
      duration: 2000,
    });
  }

}
