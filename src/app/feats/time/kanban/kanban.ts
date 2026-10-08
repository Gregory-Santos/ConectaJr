import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TarefaService } from '../services/tarefa-service';
import { ParticipantesService } from '../services/participantes-service';
import { Tarefa } from '../models/tarefa';

@Component({
    selector: 'app-kanban',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './kanban.html',
    styleUrl: './kanban.css'
})
export class Kanban {
    private tarefaService = inject(TarefaService);
    private participantesService = inject(ParticipantesService);
    tarefas = this.tarefaService.listarTarefas();
    participantes = this.participantesService.listarParticipantes();
    popupAdicionar = signal(false);
    menuAberto = signal<number | null>(null);
    novaTarefa = {
        descricao: '',
        responsavelId: 1,
        dependeDe: '',
        status: 'backlog' as Tarefa['status']
    };
    colunas = [
        { id: 'backlog', titulo: 'Backlog' },
        { id: 'todo', titulo: 'To Do' },
        { id: 'progresso', titulo: 'In Progress' },
        { id: 'testing', titulo: 'Testing' },
        { id: 'done', titulo: 'Done' }
    ];
    tarefasPorStatus(status: string) {
        return this.tarefas().filter(tarefa => tarefa.status === status);
    }
    participantePorId(id: number) {
        return this.participantes().find(participante => participante.id === id);
    }
    abrirPopupAdicionar() {
        this.popupAdicionar.set(true);
    }
    fecharPopupAdicionar() {
        this.popupAdicionar.set(false);
    }
    alternarMenu(id: number) {
        this.menuAberto.update(idAberto => idAberto === id ? null : id);
    }
    fecharMenu() {
        this.menuAberto.set(null);
    }
    moverTarefa(id: number) {
        this.menuAberto.set(null);
        console.log('Mover tarefa:', id);
    }
    editarTarefa(id: number) {
        this.menuAberto.set(null);
        console.log('Editar tarefa:', id);
    }
    excluirTarefa(id: number) {
        this.menuAberto.set(null);
        console.log('Excluir tarefa:', id);
    }
    adicionarTarefa() {
        if (!this.novaTarefa.descricao.trim()) {
            return;
        }
        const novaTarefa: Tarefa = {
            id: Date.now(),
            titulo: this.novaTarefa.descricao,
            descricao: this.novaTarefa.descricao,
            status: this.novaTarefa.status,
            responsavelId: Number(this.novaTarefa.responsavelId)
        };
        this.tarefaService.adicionarTarefa(novaTarefa);
        this.novaTarefa = {
            descricao: '',
            responsavelId: 1,
            dependeDe: '',
            status: 'backlog'
        };
        this.fecharPopupAdicionar();
    }
}