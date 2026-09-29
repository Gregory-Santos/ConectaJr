import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Sprint } from './sprint';

describe('Sprint', () => {
  let component: Sprint;
  let fixture: ComponentFixture<Sprint>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sprint],
    }).compileComponents();

    fixture = TestBed.createComponent(Sprint);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
