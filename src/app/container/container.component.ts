import { Component, ViewChild} from '@angular/core';

import { ProductListComponent } from './product-list/product-list.component'

@Component({
  selector: 'container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {

  @ViewChild(ProductListComponent) productListComponent : ProductListComponent

  numberOfProducts = 0;

  product = {
    name: 'Iphone x',
    price: 999,
    color: 'Blue',
    discount: 8.5,
    stock: 0,
    image: 'assets/images/iphone.jpeg'
  }

  getDiscountPrice() {
    return this.product.price - (this.product.price * this.product.discount/1000)
  }

  onNumberOfProductsChange(currentNumber : number) {
    this.numberOfProducts = currentNumber;
  }

  searchText: string = '';

  setSearchText(value: string) {
    this.searchText = value;
  }

}
