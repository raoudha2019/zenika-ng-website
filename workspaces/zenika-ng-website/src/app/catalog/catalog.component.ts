import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { zip } from 'rxjs';
import { WELCOME_MSG } from '../app.token';
import { BasketService } from '../basket/basket.service';
import { CatalogService } from './catalog.service';
import { ProductComponent } from './product/product.component';
import { Product } from './product/product.types';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [RouterLinkWithHref, CurrencyPipe, NgFor, NgIf, ProductComponent],
  templateUrl: './catalog.component.html',
})
export class CatalogComponent implements OnInit {
  protected welcomeMsg = inject(WELCOME_MSG);

  private basketService = inject(BasketService);

  private catalogService = inject(CatalogService);

  protected get total() {
    return this.basketService.total;
  }

  protected get products() {
    return this.catalogService.products;
  }

  protected get isStockEmpty() {
    return this.catalogService.isStockEmpty;
  }

  protected isAvailable(product: Product) {
    return this.catalogService.isAvailable(product);
  }

  ngOnInit(): void {
    zip([this.basketService.fetch(), this.catalogService.fetch()]).subscribe();
  }

  protected addToBasket(product: Product): void {
    this.basketService.addItem(product.id).subscribe(() => {
      this.catalogService.decreaseStock(product.id);
    });
  }
}
