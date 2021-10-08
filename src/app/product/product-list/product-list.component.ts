import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  // changeDetection:ChangeDetectionStrategy.OnPush //will only effect changes in UI when we return new object not mutated object
})
export class ProductListComponent implements OnInit, OnChanges {
  @Input() productList: Product[] = []; //Send data from parent to child
  @Output() productSelect = new EventEmitter(); //Send data from child to parent
  productSum = 0;
  constructor() { }


  ngOnChanges(changes: SimpleChanges): void { // can implement only on components with @Input ==> watch changes on input values
    console.log(changes); //it also doesn't catch mutated objects
    if (changes.productList && changes.productList.currentValue.length > 0)
      this.productSum = changes.productList.currentValue.map((product: Product) => product.price).reduce((a: number, b: number) => a + b)
  }

  ngOnInit(): void {
  }

  onSelect(product: Product) {
    this.productSelect.emit(product);
  }

  trackByProductId(i: number, data: Product) {
    return data.id;
  }

}
