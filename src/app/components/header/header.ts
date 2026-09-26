import { Component, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';

@Component({
  imports: [FormField],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  pesquisaModel = signal<string>('');

  pesquisaForm = form(this.pesquisaModel);

  pesquisar(event: SubmitEvent) {
    event.preventDefault();
  }

  notificacoesAbertas = false;

  notificacoes = [
    {
      id: 1,
      titulo: 'Nova oportunidade',
      mensagem: 'Uma nova oportunidade de Front-End foi publicada.',
      tempo: 'Há 5 minutos',
      lida: false,
    },

    {
      id: 2,
      titulo: 'Nova mensagem',
      mensagem: 'Você recebeu uma nova mensagem.',
      tempo: 'Há 20 minutos',
      lida: false,
    },

    {
      id: 3,
      titulo: 'Perfil visualizado',
      mensagem: 'Uma empresa visualizou seu perfil.',
      tempo: 'Hoje',
      lida: false,
    },
  ];

  get notificacoesNaoLidas() {
    return this.notificacoes.filter((notificacao) => !notificacao.lida).length;
  }

  alternarNotificacoes() {
    this.notificacoesAbertas = !this.notificacoesAbertas;
  }

  marcarComoLida(id: number) {
    const notificacao = this.notificacoes.find((notificacao) => notificacao.id === id);

    if (notificacao) {
      notificacao.lida = true;
    }
  }

  marcarTodasComoLidas() {
    this.notificacoes.forEach((notificacao) => (notificacao.lida = true));
  }
}
