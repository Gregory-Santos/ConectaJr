import { TestBed } from '@angular/core/testing';
import { Tarefa } from './tarefa';

describe('Tarefa', () => {
  let service: Tarefa;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tarefa);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
