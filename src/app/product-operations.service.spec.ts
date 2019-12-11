import { TestBed } from '@angular/core/testing';

import { ProductOperationsService } from './product-operations.service';

describe('ProductOperationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductOperationsService = TestBed.get(ProductOperationsService);
    expect(service).toBeTruthy();
  });
});
