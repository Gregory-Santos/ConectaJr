import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AtualizacoesTime } from './atualizacoes-time';

describe('AtualizacoesTime', () => {
  let component: AtualizacoesTime;
  let fixture: ComponentFixture<AtualizacoesTime>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtualizacoesTime],
    }).compileComponents();

    fixture = TestBed.createComponent(AtualizacoesTime);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
