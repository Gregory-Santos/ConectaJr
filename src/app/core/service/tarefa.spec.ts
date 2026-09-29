import { TestBed } from '@angular/core/testing';
import { TarefaService } from './tarefa';

describe('Tarefa', () => {
  let service: TarefaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TarefaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
