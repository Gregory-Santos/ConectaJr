import { Service, signal } from '@angular/core';
import { ChatInterface } from './chat-interface';
import { FormsModule } from '@angular/forms';

@Service()
export class ChatService {

    conversas = signal<ChatInterface[]>([{
        nome: 'Brenda Melo',
        foto: 'img/brenda.png',
        mensagem: 'A conecta é o futuro! 🚀✨',
        data: 'Hoje'
    }, {
        nome: 'Rafael Vinicius',
        foto: 'img/rafa.png',
        mensagem: 'Vou postar no instagram da conecta essa nova funcionalidade 😁',
        data: 'Hoje'
    }, 
    {
        nome: 'Gregory dos Santos',
        foto: 'img/gregory.png',
        mensagem: 'Posso criar a pasta no angular?',
        data: 'Hoje'
    },
    {
        nome: 'Rodrigo de Souza',
        foto: 'img/rodrigo.png',
        mensagem: 'Qual o prazo final?',
        data: 'Hoje'
    },

    {
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

    conversaSelecionada = signal<ChatInterface | null>(null);

    selecionarConversa(conversa: ChatInterface) {
        this.conversaSelecionada.set(conversa);

        this.mensagens.set([{
            texto: conversa.mensagem,
            minha: false
        }]);
        this.conversasLidas.add(conversa.nome);
    };

    mensagens = signal<{ texto: string; minha: boolean }[]>([]);
    novaMensagem = signal('');

    enviarMensagem() {

        if(!this.novaMensagem().trim()){
            return;
        }
        this.mensagens.update(mensagens => [
            ...mensagens, {
                texto: this.novaMensagem(),
                minha: true
            }

        ]);
        this.novaMensagem.set('');
    }

    conversasLidas = new Set<string>();
}
