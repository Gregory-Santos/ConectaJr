import { Injectable, signal } from '@angular/core';
import { Participante } from '../models/participante';

@Injectable({
    providedIn: 'root'
})
export class ParticipantesService {
    private participantes = signal<Participante[]>([
        {
            id: 1,
            nome: 'Brenda Melo',
            foto: '/img/brenda.png',
            status: 'concluido',
            atualizacao: 'concluiu: entregar design system',
            atualizacoes: [
                {
                    id: 1,
                    descricao: 'Entregou o design system.',
                    data: '03/08/2026',
                    horario: '14:32'
                },
                {
                    id: 2,
                    descricao: 'Ajustou os componentes de botão.',
                    data: '03/08/2026',
                    horario: '16:15'
                },
                {
                    id: 3,
                    descricao: 'Revisou a documentação.',
                    data: '04/08/2026',
                    horario: '09:20'
                },

            ]
        },
        {
            id: 2,
            nome: 'Gregory Santos',
            foto: '/img/gregory.png',
            status: 'andamento',
            atualizacao: 'começou: corrigir bug página do carrinho',
            atualizacoes: [
                {
                    id: 4,
                    descricao: 'Iniciou a correção da página do carrinho.',
                    data: '03/08/2026',
                    horario: '10:15'
                },
                {
                    id: 5,
                    descricao: 'Identificou o problema no cálculo do total.',
                    data: '03/08/2026',
                    horario: '13:40'
                },
                {
                    id: 6,
                    descricao: 'Está testando a solução.',
                    data: '04/08/2026',
                    horario: '11:05'
                }
            ]
        },
        {
            id: 3,
            nome: 'Beatriz Ferrari',
            foto: '/img/beatriz.png',
            status: 'pendente',
            atualizacao: 'depende: corrigir bug página do carrinho',
            atualizacoes: [
                {
                    id: 7,
                    descricao: 'Aguardando a correção da página do carrinho.',
                    data: '03/08/2026',
                    horario: '09:10'
                },
                {
                    id: 8,
                    descricao: 'Separou os arquivos necessários para continuar.',
                    data: '03/08/2026',
                    horario: '15:25'
                },
                {
                    id: 9,
                    descricao: 'A tarefa poderá ser iniciada após a dependência.',
                    data: '04/08/2026',
                    horario: '08:45'
                }
            ]
        },
        {
            id: 4,
            nome: 'Junior da Silva',
            foto: '/img/junior.png',
            status: 'andamento',
            atualizacao: 'começou: organizar tarefas do projeto',
            atualizacoes: [
                {
                    id: 10,
                    descricao: 'Organizou as tarefas da sprint.',
                    data: '04/08/2026',
                    horario: '09:30'
                },
                {
                    id: 11,
                    descricao: 'Iniciou a integração da API.',
                    data: '04/08/2026',
                    horario: '11:15'
                }
            ]}
        ]);

    listarParticipantes() {
        return this.participantes;
    }
}