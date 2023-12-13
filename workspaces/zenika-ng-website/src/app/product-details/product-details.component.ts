import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '../catalog/product/product.types';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  standalone: true,
  imports: [CurrencyPipe],
})
export class ProductDetailsComponent {
  @Input({ required: true }) product!: Product;
}
