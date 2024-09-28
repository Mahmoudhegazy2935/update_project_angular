import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  product = new BehaviorSubject<any>(this.getCartFromLocalStorage());
  cartitemlist: any = this.getCartFromLocalStorage();

  constructor() {}

  getproduct() {
    return this.product.asObservable();
  }

  addtocart(product: any) {
    if (!product.quantity) {
      product.quantity = 1;
    }
    this.cartitemlist.push(product);
    this.updateLocalStorage();
    this.product.next(this.cartitemlist);
    this.gettotalprice();
  }

  getProductTotalPrice(product: any): number {
    if (product.price && product.quantity) {
      return product.price * product.quantity;
    }
    return 0;
  }

  gettotalprice(): number {
    let grandtotal = 0;
    this.cartitemlist.forEach((item: any) => {
      if (item.price && item.quantity) {
        grandtotal += item.price * item.quantity;
      }
    });
    return grandtotal;
  }

  removeallcart() {
    this.cartitemlist = [];
    this.updateLocalStorage();
    this.product.next(this.cartitemlist);
  }

  removeitemfromcart(product: any) {
    this.cartitemlist.map((item: any, index: any) => {
      if (product.id === item.id) {
        this.cartitemlist.splice(index, 1);
      }
    });
    this.updateLocalStorage();
    this.product.next(this.cartitemlist);
  }


  private updateLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(this.cartitemlist));
  }


  private getCartFromLocalStorage(): any {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  }
}
