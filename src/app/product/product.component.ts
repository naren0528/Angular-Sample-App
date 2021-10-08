import { AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, AfterViewInit, AfterViewChecked {

  @ViewChild(HeaderComponent) headerComponent!:HeaderComponent

  visible = false;
  hidden = true;
  productName = 'Samsung Galaxy'
  products: Product[] = []
  constructor() { }

  ngAfterViewChecked(): void {
    console.log(this.headerComponent);
    
  }

  ngAfterViewInit(): void {
  this.headerComponent.Title = 'All Mobile Products'  
  }

  ngOnInit(): void {
  }

  onToggle() {
    this.visible = !this.visible;
  }
  toggleTable() {
    this.hidden = !this.hidden;
  }

  loadProducts() {
    this.products = [{ id: 10001, name: 'Samsung Galaxy', mfg: new Date('02-02-2019'), price: 1000 },
    { id: 10002, name: 'Apple iphone', mfg: new Date('02-02-2020'), price: 2000 },
    { id: 10003, name: 'One plus Nord', mfg: new Date('01-02-2021'), price: 3000 }]
  }

  trackByProductId(i: number, data: Product) {
    return data.id;
  }
  addProduct() {
    this.products = [...this.products, { id: 10004, name: 'Pocco M1', mfg: new Date('08-08-2021'), price: 4000 }]
    // this.products.push({ id: 10004, name: 'Pocco M1', mfg: new Date('08-08-2021'), price: 4000 })
  }
  onProductSelect(product: Product) {
    console.log(product);
  }

}
