import { Injectable } from '@angular/core';
import { Reuniao } from '../models/reuniao';

@Injectable({
  providedIn: 'root' // Isso torna o serviço disponível em todo o app
})
export class ReuniaoService {
  
  // Colocamos os dados iniciais direto dentro da array privada
  private reunioes: Reuniao[] = [
    {
      id: '1',
      titulo: 'Alinhamento de pauta',
      horario: '16:30',
      participantes: ['João', 'Patricia', 'pedrinho'], // Corrigido para strings separadas
      categoria: 'dev'
    },
    {
      id: '2',
      titulo: 'Reunião com cliente',
      horario: '10:30',
      participantes: ['Amanda', 'Carlos'],
      categoria: 'Cliente'
    },
    {
      id: '3',
      titulo: 'Planejamento',
      horario: '14:00',
      participantes: ['Maria', 'João'],
      categoria: 'Planejamento'
    },
    {
      id: '1',
      titulo: 'Alinhamento de pauta',
      horario: '16:30',
      participantes: ['João', 'Patricia', 'pedrinho'], // Corrigido para strings separadas
      categoria: 'dev'
    },
    {
      id: '2',
      titulo: 'Reunião com cliente',
      horario: '10:30',
      participantes: ['Amanda', 'Carlos'],
      categoria: 'Cliente'
    },
    {
      id: '3',
      titulo: 'Planejamento',
      horario: '14:00',
      participantes: ['Maria', 'João'],
      categoria: 'Planejamento'
    }
  ];

  // Função para que os componentes consigam pegar a lista de reuniões
  getReunioes(): Reuniao[] {
    return this.reunioes;
  }
}
