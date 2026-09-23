import { TestBed } from '@angular/core/testing';
import { FeedProjeto } from './feed-projeto';

describe('FeedProjeto', () => {
  let service: FeedProjeto;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedProjeto);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
