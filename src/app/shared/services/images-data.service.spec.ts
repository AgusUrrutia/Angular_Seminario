import { TestBed } from '@angular/core/testing';

import { ImagesDataService } from './images-data.service';

describe('ImagesDataService', () => {
  let service: ImagesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
