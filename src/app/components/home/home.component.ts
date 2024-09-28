import { Component } from '@angular/core';
import { Product } from '../../models/products';
import { ProductService } from '../../service/product.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { CartService } from '../../service/cart.service';
import Swal from 'sweetalert2';

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
  addButton: boolean = false;
  images: string[] = [
    '../../../assets/Artboard 1.jpg',
    '../../../assets/Artboard 2.jpg',
    '../../../assets/Artboard 3.jpg',
  ];
  currentIndex: number = 0;
  intervalId: any;
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
  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
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
  editproduct() {
    this.router.navigate(['/edit', this.newproduct.id]);
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
