import { Component, inject, signal } from '@angular/core';
import { ParticipantesService } from '../services/participantes-service';

@Component({
    selector: 'app-sprint',
    standalone: true,
    imports: [],
    templateUrl: './sprint.html',
    styleUrl: './sprint.css'
})
export class Sprint {
    private participantesService = inject(ParticipantesService);
    participantes = this.participantesService.listarParticipantes();
    participanteAberto = signal<number | null>(null);

    alternarParticipante(id: number) {
        this.participanteAberto.update(idAberto => idAberto === id ? null : id);
    }

    participanteEstaAberto(id: number) {
        return this.participanteAberto() === id;
    }
}