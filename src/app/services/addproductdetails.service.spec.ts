import { TestBed } from '@angular/core/testing';

import { AddproductdetailsService } from './addproductdetails.service';

describe('AddproductdetailsService', () => {
  let service: AddproductdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddproductdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
