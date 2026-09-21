import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReuniaoCard } from './reuniao-card';

describe('ReuniaoCard', () => {
  let component: ReuniaoCard;
  let fixture: ComponentFixture<ReuniaoCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReuniaoCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ReuniaoCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
