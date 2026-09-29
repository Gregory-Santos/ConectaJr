import { Component, inject } from '@angular/core';
import { Tarefa } from '../../core/models/tarefa';
import { TarefaService } from '../../core/service/tarefa';
import { Kanban } from './kanban/kanban';
import { Sprint } from './sprint/sprint';

@Component({
  imports: [Kanban, Sprint],
  selector: 'app-time',
  styleUrl: './time.css',
  templateUrl: './time.html',
})
export class Time {
  
  private tarefaService = inject(TarefaService);

  tarefas: Tarefa[] =
  this.tarefaService.listarTarefas();
}
