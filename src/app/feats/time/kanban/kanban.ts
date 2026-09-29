import { Component,inject } from '@angular/core';
import { Tarefa } from '../../../core/models/tarefa';
import { TarefaService } from '../../../core/service/tarefa';
import { Sprint } from '../sprint/sprint';
@Component({
  imports: [Sprint],
  selector: 'app-kanban',
  styleUrl: './kanban.css',
  templateUrl: './kanban.html',
})
export class Kanban {
    private tarefaService = inject(TarefaService);

  tarefas: Tarefa[] =
  this.tarefaService.listarTarefas();
}
