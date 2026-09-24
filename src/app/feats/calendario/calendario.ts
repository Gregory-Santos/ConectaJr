import { Component, computed, inject, signal } from '@angular/core';
import { EventosService } from '../../core/service/eventos-service';

interface DiaCalendario {
    data: Date;
    numero: number;
    mesAtual: boolean;
}


@Component({
    selector: 'app-calendario',
    standalone: true,
    templateUrl: './calendario.html',
    styleUrl: './calendario.css'
})
export class Calendario {

    // Data que está sendo exibida no calendário
    dataAtual = signal(new Date());

    // Data selecionada
    dataSelecionada = signal(new Date());

    // Dias da semana
    diasSemana = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

    // Eventos
    private eventosService = inject(EventosService);
    eventos = this.eventosService.listarEventos();

    // Nome do mês atual
    nomeMes = computed(() => {
        return this.dataAtual().toLocaleDateString('pt-BR', {
            month: 'long'
        });
    });

    // Dias exibidos na grade
    dias = computed(() => {
        const data = this.dataAtual();
        const ano = data.getFullYear();
        const mes = data.getMonth();
        const primeiroDia = new Date(ano, mes, 1);
        const ultimoDia = new Date(ano, mes + 1, 0);
        const dias: DiaCalendario[] = [];

        // Dias do mês anterior
        for (let i = primeiroDia.getDay() - 1; i >= 0; i--) {
            const dataAnterior = new Date(ano, mes, -i);

            dias.push({
                data: dataAnterior,
                numero: dataAnterior.getDate(),
                mesAtual: false
            });
        }

        // Dias do mês atual
        for (let i = 1; i <= ultimoDia.getDate(); i++) {
            const dataDia = new Date(ano, mes, i);

            dias.push({
                data: dataDia,
                numero: i,
                mesAtual: true
            });
        }

        // Dias do próximo mês
        let proximoDia = 1;

        while (dias.length < 35) {
            const dataProxima = new Date(ano, mes + 1, proximoDia);

            dias.push({
                data: dataProxima,
                numero: proximoDia,
                mesAtual: false
            });

            proximoDia++;
        }

        return dias;
    });

    // Eventos do dia selecionado
    eventosSelecionados = computed(() => {
        return this.eventos().filter(evento =>
            this.mesmoDia(evento.data, this.dataSelecionada())
        );
    });

    // Eventos do dia seguinte
    eventosAmanha = computed(() => {
        const amanha = new Date(this.dataSelecionada());

        amanha.setDate(amanha.getDate() + 1);

        return this.eventos().filter(evento =>
            this.mesmoDia(evento.data, amanha)
        );
    });

    // Verifica se o dia é hoje
    diaAtual(dia: DiaCalendario) {
        const hoje = new Date();

        return this.mesmoDia(dia.data, hoje);
    }

    // Próximo mês
    proximoMes() {
        this.dataAtual.update(data =>
            new Date(
                data.getFullYear(),
                data.getMonth() + 1,
                1
            )
        );
    }

    // Mês anterior
    mesAnterior() {
        this.dataAtual.update(data =>
            new Date(
                data.getFullYear(),
                data.getMonth() - 1,
                1
            )
        );
    }

    // Seleciona um dia
    selecionarDia(dia: DiaCalendario) {
        this.dataSelecionada.set(dia.data);

        // Se clicar em um dia de outro mês,
        // muda automaticamente para aquele mês.
        if (!dia.mesAtual) {
            this.dataAtual.set(
                new Date(
                    dia.data.getFullYear(),
                    dia.data.getMonth(),
                    1
                )
            );
        }
    }

    // Verifica se o dia está selecionado
    diaSelecionado(dia: DiaCalendario) {
        return this.mesmoDia(
            dia.data,
            this.dataSelecionada()
        );
    }

    // Verifica se existe evento naquele dia
    possuiEvento(dia: DiaCalendario) {
        return this.eventos().some(evento =>
            this.mesmoDia(evento.data, dia.data)
        );
    }

    // Compara duas datas
    private mesmoDia(data1: Date, data2: Date) {
        return (
            data1.getDate() === data2.getDate() &&
            data1.getMonth() === data2.getMonth() &&
            data1.getFullYear() === data2.getFullYear()
        );
    }
}