import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjetoCard } from './projeto-card';

describe('ProjetoCard', () => {
  let component: ProjetoCard;
  let fixture: ComponentFixture<ProjetoCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetoCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjetoCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
