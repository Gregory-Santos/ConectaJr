import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Time } from './time';

describe('Time', () => {
  let component: Time;
  let fixture: ComponentFixture<Time>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Time],
    }).compileComponents();

    fixture = TestBed.createComponent(Time);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
