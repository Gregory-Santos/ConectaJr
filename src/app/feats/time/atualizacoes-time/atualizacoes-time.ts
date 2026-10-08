import { Component, inject } from '@angular/core';
import { ParticipantesService } from '../services/participantes-service';

@Component({
    selector: 'app-atualizacoes-time',
    standalone: true,
    imports: [],
    templateUrl: './atualizacoes-time.html',
    styleUrl: './atualizacoes-time.css'
})
export class AtualizacoesTime {
    private participantesService = inject(ParticipantesService);
    participantes = this.participantesService.listarParticipantes();
    atualizacoes = this.participantes().flatMap(participante =>
        participante.atualizacoes.map(atualizacao => ({
            ...atualizacao,
            nome: participante.nome
        }))
    ).reverse();
}