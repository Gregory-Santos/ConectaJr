import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatUsuario } from './chat-usuario';

describe('ChatUsuario', () => {
  let component: ChatUsuario;
  let fixture: ComponentFixture<ChatUsuario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatUsuario],
    }).compileComponents();

    fixture = TestBed.createComponent(ChatUsuario);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
