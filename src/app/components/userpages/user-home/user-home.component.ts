import { Component } from '@angular/core';
import { Product } from '../../../models/products';
import { CartService } from '../../../service/cart.service';
import { ProductService } from '../../../service/product.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-home',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.css',
})
export class UserHomeComponent {
  images: string[] = [
    'https://images.unsplash.com/photo-1721332150382-d4114ee27eff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1727324735318-c25d437052f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1727294810027-220b285828e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8',
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
    }, 1000);
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
  editproduct() {
    this.router.navigate(['/edit', this.newproduct.id]);
  }
  addToCart(product: any): void {
    this.cartservice.addtocart(product);
  }
}
