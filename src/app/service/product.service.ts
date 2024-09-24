import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  [x: string]: any;
  private apiUrl = 'http://localhost:3000/products';
  constructor(private httpClient: HttpClient) {}
  getAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiUrl);
  }
  creatproduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.apiUrl, product);
  }
  getproductbyid(id: string): Observable<Product> {
    return this.httpClient.get<Product>(`${this.apiUrl}/${id}`);
  }
  updateproduct(product: Product): Observable<Product> {
    return this.httpClient.put<Product>(
      `${this.apiUrl}/${product.id}`,
      product
    );
  }
  deleteproduct(productid: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${productid}`);
  }
}
