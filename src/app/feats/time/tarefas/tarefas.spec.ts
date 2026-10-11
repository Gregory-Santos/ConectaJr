import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tarefas } from './tarefas';

describe('Tarefas', () => {
  let component: Tarefas;
  let fixture: ComponentFixture<Tarefas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tarefas],
    }).compileComponents();

    fixture = TestBed.createComponent(Tarefas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
