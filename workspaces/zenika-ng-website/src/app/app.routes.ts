
import { Routes } from '@angular/router';
// import { BasketComponent } from './basket/basket.component';
// import { CatalogComponent } from './catalog/catalog.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { PRODUCT_DETAILS_PARAM_KEY } from './product-details/product-details.config';
import { catalogResolver } from './catalog/catalog.resolver';
import { basketGuard } from './basket/basket.guard';
import { BasketEmptyComponent } from './basket/basket-empty/basket-empty.component';
import { productDetailsResolver } from './product-details/product-details.resolver';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./catalog/catalog.component').then((m) => m.CatalogComponent),
    resolve: { catalogResolver },
  },
  {
    path: 'basket',
    loadComponent: () => import('./basket/basket.component').then((m) => m.BasketComponent),
    canMatch: [basketGuard],
  },
  {
    path: 'basket',
    component: BasketEmptyComponent
  },
  {
    path: `products/:${PRODUCT_DETAILS_PARAM_KEY}`,
    component: ProductDetailsComponent,
    resolve: {
      product: productDetailsResolver
    }
  },
];


