import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjetoDetalhes } from './projeto-detalhes';

describe('ProjetoDetalhes', () => {
  let component: ProjetoDetalhes;
  let fixture: ComponentFixture<ProjetoDetalhes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetoDetalhes],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjetoDetalhes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
