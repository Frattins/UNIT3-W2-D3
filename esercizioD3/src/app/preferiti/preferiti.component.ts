import { Component } from '@angular/core';
import { iProduct } from '../Models/i-product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-preferiti',
  templateUrl: './preferiti.component.html',
  styleUrl: './preferiti.component.scss'
})
export class PreferitiComponent {

preferiti: iProduct[] = [];

constructor(private productSrv:ProductService) {}

ngOnInit(){
  this.preferiti = this.productSrv.getPreferiti();
}

}
