import { Component, signal } from '@angular/core';
import { NavTime } from './nav-time/nav-time';
import { Kanban } from './kanban/kanban';
import { Tarefas } from './tarefas/tarefas';
import { Calendario } from './calendario/calendario';
import { Sprint } from './sprint/sprint';
import { AtualizacoesTime } from './atualizacoes-time/atualizacoes-time';

@Component({
    selector: 'app-time',
    standalone: true,
    imports: [NavTime, Kanban, Tarefas, Calendario, Sprint, AtualizacoesTime],
    templateUrl: './time.html',
    styleUrl: './time.css'
})
export class Time {
    abaAtiva = signal<'kanban' | 'tarefas' | 'calendario'>('kanban');
    mudarAba(aba: 'kanban' | 'tarefas' | 'calendario') {
        this.abaAtiva.set(aba);
    }
}