import { Component } from '@angular/core';
import { Product } from '../../models/products';
import { ProductService } from '../../service/product.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent {
  constructor(private productsrvice: ProductService, private router: Router) {}

    updateProduct(product: Product): void {
      if (product) { 
        this.productsrvice.updateproduct(product).subscribe(() => {
          this.router.navigate(['/home']);
        });
      }
    }
}
