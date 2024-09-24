import { Component } from '@angular/core';
import { Product } from '../../models/products';
import { ProductService } from '../../service/product.service';
import { Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  products: Product[] = [];
  newproduct: Product = {} as Product;
  constructor(private productsrvice: ProductService, private router: Router) {}
  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.productsrvice
      .getAllProducts()
      .subscribe((data) => (this.products = data));
  }
  addProduct(): void {
    const newproduct: Product = {
      id: this.newproduct.id,
      title: this.newproduct.title,
      price: this.newproduct.price,
      description: this.newproduct.description,
      image: this.newproduct.image,
      // creationAt: new Date(),
      // updatedAt: new Date(),
      // category: {
      //   id: 0,
      //   name: '',
      //   image: '',
      //   creationAt: new Date(),
      //   updatedAt: new Date(),
      // },
    };
    this.newproduct = newproduct;
    this.productsrvice.creatproduct(newproduct).subscribe((data) => {
      this.products.push(data);
    });
  }
  deleteProduct(productid: number): void {
    this.productsrvice.deleteproduct(productid.toString()).subscribe(() => {
      this.products = this.products.filter(
        (product) => product.id !== productid
      );
    });
  }
  
}
