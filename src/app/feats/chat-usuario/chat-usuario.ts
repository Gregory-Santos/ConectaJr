import { Component, inject, signal } from '@angular/core';
import { ChatService } from './chat-service';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-chat-usuario',
  styleUrl: './chat-usuario.css',
  templateUrl: './chat-usuario.html',
})
export class ChatUsuario {

  protected readonly ChatService= inject(ChatService)
  
}
