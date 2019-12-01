import { TestBed } from '@angular/core/testing';

import { BugrsRetrievalService } from './bugrs-retrieval.service';

describe('BugrsRetrievalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BugrsRetrievalService = TestBed.get(BugrsRetrievalService);
    expect(service).toBeTruthy();
  });
});
