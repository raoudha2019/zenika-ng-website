import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { BasketService } from '../basket/basket.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgIf, RouterLinkWithHref],
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  private basketService = inject(BasketService);

  protected get numberOfItems() {
    return this.basketService.numberOfItems;
  }
}
