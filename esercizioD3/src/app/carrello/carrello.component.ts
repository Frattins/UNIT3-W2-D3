import { Component } from '@angular/core';
import { iProduct } from '../Models/i-product';
import { ProductService } from '../product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrl: './carrello.component.scss'
})
export class CarrelloComponent {
  cart: iProduct[] = [];

  constructor(private productSvc: ProductService) { }

  ngOnInit() {
    this.cart = this.productSvc.getCart();
  }

  deleteCart(): void{
    this.productSvc.clearCart();
    this.cart = [];
  }
}

