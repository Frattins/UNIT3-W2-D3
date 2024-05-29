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

  clearPreferiti(): void {
    this.preferiti = [];
  }

  addToCart(product: iProduct): void {
    this.cart.push(product);
  }

  getCart(): iProduct[] {
    return this.cart;
  }

  clearCart(): void {
    this.cart = [];
  }

  clearPrefer(): void {
    this.preferiti = [];
  }






}
