import { TestBed, inject } from '@angular/core/testing';

import { ValemitterService } from './valemitter.service';

describe('ValemitterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValemitterService]
    });
  });

  it('should be created', inject([ValemitterService], (service: ValemitterService) => {
    expect(service).toBeTruthy();
  }));
});
