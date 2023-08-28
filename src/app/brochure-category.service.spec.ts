import { TestBed } from '@angular/core/testing';

import { BrochureCategoryService } from './brochure-category.service';

describe('BrochureCategoryService', () => {
  let service: BrochureCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrochureCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
