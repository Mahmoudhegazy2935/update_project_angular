import { Component } from '@angular/core';
import { Product } from '../../models/products';
import { ProductService } from '../../service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent {
  product: Product = {} as Product;
  editemood: boolean = false;
  base64:any='';
  constructor(
    private productsrvice: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.editemood = true;
        this.productsrvice.getproductbyid(id).subscribe((product) => {
          this.product = product;
        });
      }
    }
  onSubmit(): void {
    if (this.editemood) {
      this.productsrvice
        .updateProduct(this.product.id, this.product)
        .subscribe(() => {
          this.router.navigate(['/home']);
        });
    } else {
      this.productsrvice.creatproduct(this.product).subscribe(() => {
        this.router.navigate(['/home']);
      });
    }
  }


  getImagePath(event:any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
       this.base64 = reader.result;
    };
  }
}
