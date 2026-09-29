import { signal,computed, Service} from '@angular/core';
import { Evento } from '../models/evento';

@Service()
export class Calendario {
    private readonly _eventos = signal<Evento[]>(this.getMockEventos());
    readonly eventos = this._eventos.asReadonly();

    //retorna os eventos de um dia especifico
    getEventosDoDia(data: string) {
        return computed(() =>
        this._eventos().filter(e => e.data === data)
        );
    }

    //adiciona um novo evento
    adicionarEvento(evento: Evento) {
        this._eventos.update(lista => [...lista, evento]);

    }

    //marca tarefa como concluida
    alternarConcluido(id: string) {
        this._eventos.update(lista =>
            lista.map(e =>
                e.id === id ? {...e, conlcuido: !e.concluido} : e
        )
    );
    }

    private getMockEventos(): Evento[] {
        const hoje = new Date();
        const formatar = (d: Date) => d.toISOString().split('T')[0];
        
        return [

    
    {
        id: '1',
        titulo: 'Reunião com equipe de Design',
        descricao: 'Alinhar protótipos do novo feed',
        data: formatar(hoje),
        hora: '10:00',
        tipo: 'reuniao',
        concluido: false
    },
      {
          id: '2',
          titulo: 'Entregar tela de Home',
          data: formatar(hoje),
          hora: '14:30',
          tipo: 'tarefa',
          concluido: false,
          descricao: ''
      },
      {
          id: '3',
          titulo: 'Revisar pull requests',
          data: formatar(hoje),
          tipo: 'tarefa',
          concluido: true,
          descricao: '',
          hora: ''
      },
      {
          id: '4',
          titulo: 'Daily com o time',
          data: formatar(new Date(hoje.getTime() + 86400000)), // amanhã
          hora: '09:15',
          tipo: 'reuniao',
          descricao: '',
          concluido: false
      },
      {
          id: '5',
          titulo: 'Estudar Signals no Angular',
          data: formatar(new Date(hoje.getTime() + 86400000 * 2)),
          tipo: 'lembrete',
          descricao: '',
          hora: '',
          concluido: false
      }
        ]
    }
}