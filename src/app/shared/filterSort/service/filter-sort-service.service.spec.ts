import { TestBed } from '@angular/core/testing';

import { FilterSortServiceService } from './filter-sort-service.service';

describe('FilterSortServiceService', () => {
  let service: FilterSortServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterSortServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
