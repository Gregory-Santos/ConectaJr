import { Component, computed, inject, signal } from '@angular/core';
import { TarefaService } from '../services/tarefa-service';
import { Tarefa } from '../models/tarefa';

@Component({
    selector: 'app-tarefas',
    standalone: true,
    imports: [],
    templateUrl: './tarefas.html',
    styleUrl: './tarefas.css'
})
export class Tarefas {
    private tarefaService = inject(TarefaService);
    tarefas = this.tarefaService.listarTarefas();
    filtroAtivo = signal<'minhas' | 'time'>('minhas');
    menuFiltroAberto = signal(false);
    minhasTarefas = computed(() =>
        this.tarefas().filter(tarefa => tarefa.responsavelId === 4)
    );
    tarefasTime = computed(() =>
        this.tarefas().filter(tarefa =>
            [1, 2, 3, 4].includes(tarefa.responsavelId)
        )
    );
    tarefasExibidas = computed(() =>
        this.filtroAtivo() === 'minhas' ? this.minhasTarefas() : this.tarefasTime()
    );
    tarefasConcluidas = computed(() =>
        this.tarefasExibidas().filter(tarefa => tarefa.status === 'done').length
    );
    progresso = computed(() => {
        const total = this.tarefasExibidas().length;
        return total ? Math.round((this.tarefasConcluidas() / total) * 100) : 0;
    });
    alternarMenuFiltro() {
        this.menuFiltroAberto.update(aberto => !aberto);
    }
    selecionarFiltro(filtro: 'minhas' | 'time') {
        this.filtroAtivo.set(filtro);
        this.menuFiltroAberto.set(false);
    }
    statusTarefa(tarefa: Tarefa) {
        if (tarefa.status === 'done') {
            return 'Finalizado';
        }
        if (tarefa.status === 'progresso') {
            return 'Em andamento';
        }
        if (tarefa.status === 'testing') {
            return 'Em teste';
        }
        if (tarefa.status === 'backlog') {
            return 'Backlog';
        }
        return 'Pendente';
    }
}