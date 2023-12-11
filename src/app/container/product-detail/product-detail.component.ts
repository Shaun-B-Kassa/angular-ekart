import { Component, Input } from '@angular/core';

import { Product } from '../../Model/Product';
import { ProductListComponent } from '../product-list/product-list.component'


@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

  @Input() productListComponent : ProductListComponent

  product : Product

  ngOnInit(){

    this.product = this.productListComponent.selectedProduct; 

  }


}
