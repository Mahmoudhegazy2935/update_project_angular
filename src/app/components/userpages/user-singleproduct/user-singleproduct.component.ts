import { Component } from '@angular/core';
import { Product } from '../../../models/products';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../service/product.service';
import { CartService } from '../../../service/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-singleproduct',
  standalone: true,
  imports: [],
  templateUrl: './user-singleproduct.component.html',
  styleUrl: './user-singleproduct.component.css',
})
export class UserSingleproductComponent {
  product: Product | undefined;
  constructor(
    private cartservice: CartService,
    private route: ActivatedRoute,
    private router: Router,
    private productservice: ProductService
  ) {}
  ngOnInit(): void {
    this.getProduct();
  }
  getProduct(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.productservice
      .getproductbyid(id.toString())
      .subscribe((product) => (this.product = product));
  }
  addToCart(product: any): void {
    this.cartservice.addtocart(product);
    Swal.fire({
      icon: 'success',
      title: 'Added to Cart',
      text: 'The product has been successfully added to the cart.',
      showConfirmButton: false,
      timer: 750,
    });
  }
}
