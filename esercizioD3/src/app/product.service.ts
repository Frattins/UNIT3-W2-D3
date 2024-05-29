import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iProduct } from './Models/i-product';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  apiUrl:string = 'https://dummyjson.com/products'

constructor(private http: HttpClient) { }

  cart: iProduct[] = [];
  preferiti: iProduct[] = [];

  getAll(): Observable<iProduct[]> {
    return this.http.get<{ products: iProduct[] }>(this.apiUrl).pipe(
      map(response => response.products)
    )
  }

  addToPreferiti(product: iProduct): void {
    this.preferiti.push(product);
  }

  getPreferiti(): iProduct[] {
    return this.preferiti;
  }

  removeFromPref(product: iProduct): void {
    const i = this.preferiti.findIndex(p => p.id === product.id);
    if (i !== -1) {
      this.preferiti.splice(i, 1);
    }
  }

  addToCart(product: iProduct): void {
    this.cart.push(product);
  }

  getCart(): iProduct[] {
    return this.cart;
  }

  removeFromCart(product: iProduct): void {
    const i = this.cart.findIndex(p => p.id === product.id);
    if (i !== -1) {
      this.cart.splice(i, 1);
    }
  }
}
