import { AfterContentInit, AfterViewChecked, Component, ContentChild, ContentChildren, OnInit, QueryList } from '@angular/core';
import { OrdersComponent } from '../orders/orders.component';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit, AfterContentInit, AfterViewChecked {
  @ContentChild(ProductComponent) productComponent!: ProductComponent
  @ContentChildren(OrdersComponent) ordersComponent!:QueryList<OrdersComponent>; 

  constructor() { }
  ngAfterViewChecked(): void {
    console.log('afterViewChekced when view is changed');
    
  }
  ngAfterContentInit(): void {
    console.log('afterContentInit is called when initialized');
    console.log(this.productComponent);
    console.log(this.ordersComponent);
    

  }

  ngOnInit(): void {
    console.log(this.productComponent); 

  }

}
