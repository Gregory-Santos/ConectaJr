import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Calendario } from '../../core/service/calendario';
import { Evento } from '../../core/models/evento';

@Component({
  imports: [CommonModule],
  selector: 'app-agenda',
  styleUrl: './agenda.css',
  templateUrl: './agenda.html',
})
export class Agenda {
  private Calandario = inject(Calendario);

  //data selecionada (00/00/0000)
  dataSelecionada = signal(this.formatarData(new Date()));

  mesAtual = signal(new Date());

  // Eventos do dia selecionado
  eventosDoDia = computed(() =>
    this.Calandario.eventos().filter(e => e.data === this.dataSelecionada())
  );

  // Gera os dias do mês atual
  diasDoMes = computed(() => {
    const data = this.mesAtual();
    const ano = data.getFullYear();
    const mes = data.getMonth();

    const primeiroDia = new Date(ano, mes, 1);
    const ultimoDia = new Date(ano, mes + 1, 0);
    const dias: { dia: number; dataCompleta: string; isHoje: boolean; temEvento: boolean }[] = [];

    // Dias vazios no início (para alinhar com o dia da semana)
    const diaSemanaInicio = primeiroDia.getDay(); // 0 = domingo
    for (let i = 0; i < diaSemanaInicio; i++) {
      dias.push({ dia: 0, dataCompleta: '', isHoje: false, temEvento: false });
    }

    const hojeStr = this.formatarData(new Date());

    for (let d = 1; d <= ultimoDia.getDate(); d++) {
      const dataCompleta = this.formatarData(new Date(ano, mes, d));
      const temEvento = this.Calandario.eventos().some(e => e.data === dataCompleta);

      dias.push({
        dia: d,
        dataCompleta,
        isHoje: dataCompleta === hojeStr,
        temEvento
      });
    }

    return dias;
  });

  // Nome do mês
  nomeMes = computed(() => {
    return this.mesAtual().toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
  });

  selecionarDia(dataCompleta: string) {
    if (dataCompleta) {
      this.dataSelecionada.set(dataCompleta);
    }
  }

  mesAnterior() {
    const novaData = new Date(this.mesAtual());
    novaData.setMonth(novaData.getMonth() - 1);
    this.mesAtual.set(novaData);
  }

  proximoMes() {
    const novaData = new Date(this.mesAtual());
    novaData.setMonth(novaData.getMonth() + 1);
    this.mesAtual.set(novaData);
  }

  alternarConcluido(id: string) {
    this.Calandario.alternarConcluido(id);
  }

  private formatarData(data: Date): string {
    return data.toISOString().split('T')[0];
  }

  getIcone(tipo: string): string {
    switch (tipo) {
      case 'reuniao': return '👥';
      case 'tarefa': return '✅';
      case 'lembrete': return '🔔';
      default: return '📌';
    }
  }
}
