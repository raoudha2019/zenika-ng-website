import { inject } from '@angular/core';
import { catchError, EMPTY, map } from 'rxjs';
import { BasketService } from './basket.service';

export const basketGuard = () => {
  return inject(BasketService)
    .fetch()
    .pipe(
      map(({ length }) => length > 0),
      catchError(() => {
        console.log("Impossible d'accéder au panier.");
        return EMPTY;
      }),
    );
};
