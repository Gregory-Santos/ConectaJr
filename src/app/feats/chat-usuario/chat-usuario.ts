import { Component, inject } from '@angular/core';
import { ChatService } from './chat-service';

@Component({
  imports: [],
  selector: 'app-chat-usuario',
  styleUrl: './chat-usuario.css',
  templateUrl: './chat-usuario.html',
})
export class ChatUsuario {

  protected readonly ChatService= inject(ChatService)
}
