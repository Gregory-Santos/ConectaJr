import { Injectable, signal } from '@angular/core';
import { Tarefa } from '../models/tarefa';

@Injectable({
    providedIn: 'root'
})
export class TarefaService {
    private tarefas = signal<Tarefa[]>([
        {
            id: 1,
            titulo: 'Motion do ícone',
            descricao: 'Fazer motion do ícone da tela de chat',
            status: 'backlog',
            responsavelId: 1
        },
        {
            id: 2,
            titulo: 'Tela de login',
            descricao: 'Ajustar responsividade da tela de login',
            status: 'todo',
            responsavelId: 2
        },
        {
            id: 3,
            titulo: 'Página inicial',
            descricao: 'Finalizar os cards da página inicial',
            status: 'todo',
            responsavelId: 3
        },
        {
            id: 4,
            titulo: 'Menu lateral',
            descricao: 'Corrigir comportamento do menu lateral',
            status: 'progresso',
            responsavelId: 1
        },
        {
            id: 5,
            titulo: 'Calendário',
            descricao: 'Finalizar layout do calendário',
            status: 'progresso',
            responsavelId: 2
        },
        {
            id: 6,
            titulo: 'Formulário',
            descricao: 'Testar validação dos campos',
            status: 'testing',
            responsavelId: 3
        },
        {
            id: 7,
            titulo: 'Header',
            descricao: 'Revisar espaçamentos do header',
            status: 'testing',
            responsavelId: 1
        },
        {
            id: 8,
            titulo: 'Footer',
            descricao: 'Finalizar versão desktop',
            status: 'done',
            responsavelId: 2
        }
    ]);

    listarTarefas() {
        return this.tarefas;
    }

    adicionarTarefa(tarefa: Tarefa) {
        this.tarefas.update(tarefas => [...tarefas, tarefa]);
    }
}