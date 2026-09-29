import { Service, signal } from '@angular/core';
import { ChatInterface } from './chat-interface';

@Service()
export class ChatService {

    conversas = signal<ChatInterface[]>([{
        nome: 'Fernando Mendes',
        foto: 'foto',
        mensagem: 'Olá, boa tarde',
        data: 'Hoje'
    },
    {
        nome: 'Pedro José',
        foto: 'foto',
        mensagem: 'Como está o Design?',
        data: 'Hoje'
    },
    {
        nome: 'Betina Krauss',
        foto: 'foto',
        mensagem: 'Manda em PDF',
        data: 'Ontem'
    },
    {
        nome: 'Lucas Fernandes',
        foto: 'foto',
        mensagem: 'Aguardo retorno',
        data: 'Ontem'
    },
    {
        nome: 'Maria Pereira',
        foto: 'foto',
        mensagem: 'Reunião quinta às 14h',
        data: 'Ontem'
    },
    {
        nome: 'Miguel Lucas',
        foto: 'foto',
        mensagem: 'O prazo é até amanhã',
        data: '25/09/26'
    },
    {
        nome: 'Luana Mota',
        foto: 'foto',
        mensagem: 'Bom dia, grata!',
        data: '25/09/26'
    }
    ])
}
