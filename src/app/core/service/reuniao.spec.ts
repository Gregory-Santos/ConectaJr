import { TestBed } from '@angular/core/testing';
import { Reuniao } from './reuniao';

describe('Reuniao', () => {
  let service: Reuniao;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Reuniao);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
