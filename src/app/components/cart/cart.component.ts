import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'], 
})
export class CartComponent implements OnInit {
  public products: any[] = [];
  public grandtotal: number = 0;
  public purchaseMessage: string = '';
  constructor(private cartservice: CartService) {}

  ngOnInit() {
    this.cartservice.getproduct().subscribe((res) => {
      this.products = res;
      this.updateTotalPrice(); 
    });
  }

  emptycart() {
    this.cartservice.removeallcart();
    this.updateTotalPrice(); 
  }

  removeproduct(product: any) {
    this.cartservice.removeitemfromcart(product);
    this.updateTotalPrice(); 
  }

  updateQuantity(product: any, value: string) {
    if (value === 'max') {
      product.quantity += 1;
    } else if (value === 'min' && product.quantity > 1) {
      product.quantity -= 1;
    }
    this.updateTotalPrice(); 
  }


  updateTotalPrice() {
    this.grandtotal = this.cartservice.gettotalprice();
  }
  getProductTotalPrice(product: any): number {
    return this.cartservice.getProductTotalPrice(product);
  }
  purchase() {
    this.purchaseMessage = 'order is done';
    setTimeout(() => {
      this.purchaseMessage = ''; 
    }, 3000);
  }
}
