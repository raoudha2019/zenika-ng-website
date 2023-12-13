import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ApiService } from '../shared/services/api.service';
import { PRODUCT_DETAILS_PARAM_KEY } from './product-details.config';
import { Product } from '../catalog/product/product.types';

export const productDetailsResolver: ResolveFn<Product> = (route) => {
  return inject(ApiService).getProduct(route.params[PRODUCT_DETAILS_PARAM_KEY]);
};
