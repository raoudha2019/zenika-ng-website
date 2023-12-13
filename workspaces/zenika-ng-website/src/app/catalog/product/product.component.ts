import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { Product } from './product.types';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLinkWithHref, CurrencyPipe, UpperCasePipe],
  templateUrl: './product.component.html',
})
export class ProductComponent {
  @Input({ required: true }) product!: Product;

  @Output() addToBasket = new EventEmitter<Product>();

  protected onClick(): void {
    this.addToBasket.emit(this.product);
  }

  protected isTheLast(): boolean {
    return this.product.stock === 1;
  }
}
