import { Component, inject, signal } from '@angular/core';
import { NavTime } from './nav-time/nav-time';
import { Kanban } from './kanban/kanban';
import { Tarefas } from './tarefas/tarefas';
import { Calendario } from './calendario/calendario';
import { Sprint } from './sprint/sprint';
import { AtualizacoesTime } from './atualizacoes-time/atualizacoes-time';

@Component({
  imports: [NavTime, Kanban, Tarefas, Calendario, Sprint, AtualizacoesTime],
  selector: 'app-time',
  styleUrl: './time.css',
  templateUrl: './time.html',
})
export class Time {
      abaAtiva = signal<'kanban' | 'tarefas' | 'calendario'>('kanban');
}
