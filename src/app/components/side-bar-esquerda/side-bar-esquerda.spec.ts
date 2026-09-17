import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SideBarEsquerda } from './side-bar-esquerda';

describe('SideBarEsquerda', () => {
  let component: SideBarEsquerda;
  let fixture: ComponentFixture<SideBarEsquerda>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideBarEsquerda],
    }).compileComponents();

    fixture = TestBed.createComponent(SideBarEsquerda);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
