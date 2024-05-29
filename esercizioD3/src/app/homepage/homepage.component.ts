import { Component } from '@angular/core';
import { iProduct } from '../Models/i-product';
import { ProductService } from '../product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

products:iProduct[] = [];

constructor(private productsSvc: ProductService){}

ngOnInit(){
  this.productsSvc.getAll().subscribe(products => {
    this.products = products
  })
  console.log(this.products);
}

addToCart(product: iProduct): void {
  this.productsSvc.addToCart(product);
 }

addToPreferiti(product: iProduct): void {
  this.productsSvc.addToPreferiti(product);

}
}
