import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavTime } from './nav-time';

describe('NavTime', () => {
  let component: NavTime;
  let fixture: ComponentFixture<NavTime>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavTime],
    }).compileComponents();

    fixture = TestBed.createComponent(NavTime);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
