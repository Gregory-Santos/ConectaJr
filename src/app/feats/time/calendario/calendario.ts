import { Component, computed, inject, signal } from '@angular/core';
import { TarefaService } from '../services/tarefa-service';

@Component({
    selector: 'app-calendario',
    standalone: true,
    imports: [],
    templateUrl: './calendario.html',
    styleUrl: './calendario.css'
})
export class Calendario {
    private tarefaService = inject(TarefaService);
    tarefas = this.tarefaService.listarTarefas();
    dataAtual = signal(new Date());
    dataSelecionada = signal(new Date());
    diasSemana = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'];
    horarios = ['8am', '9am', '10am', '11am', '12pm'];

    datasTarefas: Record<number, Date> = {
        1: new Date(2026, 9, 10),
        2: new Date(2026, 9, 11),
        3: new Date(2026, 9, 12),
        4: new Date(2026, 9, 13),
        5: new Date(2026, 9, 14),
        6: new Date(2026, 9, 15),
        7: new Date(2026, 9, 16),
        8: new Date(2026, 9, 17)
    };
    diasSemanaCalendario = computed(() => {
        const data = this.dataAtual();
        const inicioSemana = new Date(data);
        inicioSemana.setDate(data.getDate() - data.getDay());
        return this.diasSemana.map((nome, indice) => {
            const dia = new Date(inicioSemana);
            dia.setDate(inicioSemana.getDate() + indice);
            return {
                nome,
                data: dia
            };
        });
    });
    nomeMes = computed(() => {
        return this.dataAtual().toLocaleDateString('pt-BR', {
            month: 'long'
        });
    });
    tarefasDoDia(dia: Date) {
        return this.tarefas().filter(tarefa => {
            const dataTarefa = this.datasTarefas[tarefa.id];
            if (!dataTarefa) {
                return false;
            }
            return this.mesmoDia(dataTarefa, dia);
        });
    }
    mesmoDia(data1: Date, data2: Date) {
        return data1.getDate() === data2.getDate() &&
            data1.getMonth() === data2.getMonth() &&
            data1.getFullYear() === data2.getFullYear();
    }
    diaAtual(dia: Date) {
        const hoje = new Date();
        return this.mesmoDia(dia, hoje);
    }
    diaSelecionado(dia: Date) {
        return this.mesmoDia(dia, this.dataSelecionada());
    }
    selecionarDia(dia: Date) {
        this.dataSelecionada.set(dia);
    }
    proximaSemana() {
        this.dataAtual.update(data => {
            const novaData = new Date(data);
            novaData.setDate(novaData.getDate() + 7);
            return novaData;
        });
    }
    semanaAnterior() {
        this.dataAtual.update(data => {
            const novaData = new Date(data);
            novaData.setDate(novaData.getDate() - 7);
            return novaData;
        });
    }
    tarefaCor(status: string) {
        if (status === 'progresso') {
            return 'andamento';
        }
        if (status === 'done') {
            return 'concluida';
        }
        if (status === 'testing') {
            return 'teste';
        }
        return 'pendente';
    }
}