import { Component } from '@angular/core';
import { Product } from '../../../models/products';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../service/product.service';

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
}
