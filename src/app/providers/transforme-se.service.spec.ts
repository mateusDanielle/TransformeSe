import { TestBed, inject } from '@angular/core/testing';

import { TransformeSeService } from './transforme-se.service';

describe('TransformeSeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransformeSeService]
    });
  });

  it('should be created', inject([TransformeSeService], (service: TransformeSeService) => {
    expect(service).toBeTruthy();
  }));
});
