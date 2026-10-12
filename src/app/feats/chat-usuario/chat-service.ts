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
    }
    ]);

    conversaSelecionada = signal<ChatInterface | null>(null);

    selecionarConversa(conversa: ChatInterface) {
        this.conversaSelecionada.set(conversa);
const agora = new Date();
        this.mensagens.set([{
            texto: conversa.mensagem,
            minha: false,
             hora: agora.toLocaleString('pt-BR',{hour: '2-digit', minute: '2-digit'})
        }]);
        this.conversasLidas.add(conversa.nome);
    };

    mensagens = signal<{ texto: string; minha: boolean; hora:string }[]>([]);
    novaMensagem = signal('');

    enviarMensagem() {

        if(!this.novaMensagem().trim()){
            return;
        }
         const agora = new Date();
        this.mensagens.update(mensagens => [
            ...mensagens, {
                texto: this.novaMensagem(),
                minha: true,
                 hora: agora.toLocaleString('pt-BR',{hour: '2-digit', minute: '2-digit'})
            }

        ]);
        this.novaMensagem.set('');
    }

    conversasLidas = new Set<string>();
}
