import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BarraPesquisa } from './barra-pesquisa';

describe('BarraPesquisa', () => {
  let component: BarraPesquisa;
  let fixture: ComponentFixture<BarraPesquisa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarraPesquisa],
    }).compileComponents();

    fixture = TestBed.createComponent(BarraPesquisa);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
