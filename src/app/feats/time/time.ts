import { Component, inject } from '@angular/core';
import { Tarefa } from '../../core/models/tarefa';
import { TarefaService } from '../../core/service/tarefa';

@Component({
  imports: [],
  selector: 'app-time',
  styleUrl: './time.css',
  templateUrl: './time.html',
})
export class Time {
  
  private tarefaService = inject(TarefaService);

  tarefas: Tarefa[] =
  this.tarefaService.listarTarefas();
}
