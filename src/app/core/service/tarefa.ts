import { Injectable } from '@angular/core';

import { Tarefa } from '../models/tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  private tarefas: Tarefa[] = [

    {
      id: 1,
      titulo: 'Criar página de login',
      descricao: 'Desenvolver tela de login do sistema',
      status: 'backlog',
      responsavel: 'Maria Silva',
      prazo: '03/08'
    },

    {
      id: 2,
      titulo: 'Criar página inicial',
      descricao: 'Desenvolver estrutura da página inicial',
      status: 'todo',
      responsavel: 'Lucas Oliveira',
      prazo: '04/08'
    },

    {
      id: 3,
      titulo: 'Configurar API',
      descricao: 'Conectar aplicação com API',
      status: 'progress',
      responsavel: 'Vinícius Rodrigues',
      prazo: '05/08'
    },

    {
      id: 4,
      titulo: 'Testar formulário',
      descricao: 'Realizar testes no formulário',
      status: 'testing',
      responsavel: 'Maria Silva',
      prazo: '06/08'
    },

    {
      id: 5,
      titulo: 'Criar estrutura Angular',
      descricao: 'Configuração inicial do projeto',
      status: 'done',
      responsavel: 'Lucas Oliveira',
      prazo: '02/08'
    }

  ];


  listarTarefas(): Tarefa[] {

    return this.tarefas;

  }

}


