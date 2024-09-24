import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/products';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-single-product',
  standalone: true,
  imports: [],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css',
})
export class SingleProductComponent implements OnInit {
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
    this.productservice.getproductbyid(id.toString()).subscribe((product) => (this.product = product));
  }
}
