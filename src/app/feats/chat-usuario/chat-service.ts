import { Service, signal } from '@angular/core';
import { ChatInterface } from './chat-interface';
import { FormsModule } from '@angular/forms';

@Service()
export class ChatService {

    conversas = signal<ChatInterface[]>([{
        nome: 'Fernando Mendes',
        foto: 'img/fernando.webp',
        mensagem: 'Olá, boa tarde',
        data: 'Hoje'
    },
    {
        nome: 'Pedro José',
        foto: 'img/pedro.webp',
        mensagem: 'Como está o Design?',
        data: 'Hoje'
    },
    {
        nome: 'Betina Krauss',
        foto: 'img/betina.webp',
        mensagem: 'Manda em PDF',
        data: 'Ontem'
    },
    {
        nome: 'Lucas Fernandes',
        foto: 'img/lucas.webp',
        mensagem: 'Aguardo retorno',
        data: 'Ontem'
    },
    {
        nome: 'Maria Pereira',
        foto: 'img/maria.webp',
        mensagem: 'Reunião quinta às 14h',
        data: 'Ontem'
    },
    {
        nome: 'Miguel Lucas',
        foto: 'img/miguel.webp',
        mensagem: 'O prazo é até amanhã',
        data: '25/09/26'
    },
    {
        nome: 'Luana Mota',
        foto: 'img/luana.webp',
        mensagem: 'Bom dia, grata!',
        data: '25/09/26'
    }
    ]);

    conversaSelecionada= signal<ChatInterface | null>(null);

    selecionarConversa(conversa: ChatInterface){
        this.conversaSelecionada.set(conversa);
    };

    mensagens= signal<string[]>([]);

    novaMensagem= signal('');

    enviarMensagem(){
        this.mensagens.update(mensagens => [
            ...mensagens,
            this.novaMensagem()
        ]);
        console.log(this.mensagens());
    }
}
