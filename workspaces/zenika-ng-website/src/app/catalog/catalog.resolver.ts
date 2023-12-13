import { inject } from '@angular/core';
import { CatalogService } from './catalog.service';
import { map } from 'rxjs';

export const catalogResolver = () => {
  return inject(CatalogService).fetch().pipe(map (()=>undefined)) 
};
