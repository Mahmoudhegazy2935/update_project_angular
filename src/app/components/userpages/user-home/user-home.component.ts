import { Component } from '@angular/core';
import { Product } from '../../../models/products';
import { CartService } from '../../../service/cart.service';
import { ProductService } from '../../../service/product.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-home',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.css',
})
export class UserHomeComponent {
  images: string[] = [
    '../../../assets/Artboard 1.jpg',
    '../../../assets/Artboard 2.jpg',
    '../../../assets/Artboard 3.jpg',
  ];
  currentIndex: number = 0;
  intervalId: any;
  products: Product[] = [];
  newproduct: Product = {} as Product;
  constructor(
    private cartservice: CartService,
    private productsrvice: ProductService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.getProducts();
    this.startImageRotation();
    this.products.forEach((item: any) => {
      Object.assign(item, { quantity: 1, total: item.price });
    });
  }
  startImageRotation() {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 3000);
  }
  getProducts() {
    this.productsrvice
      .getAllProducts()
      .subscribe((data) => (this.products = data));
  }

  addToCart(product: any): void {
    this.cartservice.addtocart(product);
    Swal.fire({
      icon: 'success',
      title: 'Added to Cart',
      text: 'The product has been successfully added to the cart.',
      showConfirmButton: false,
      timer: 900,
    });
  }
}
