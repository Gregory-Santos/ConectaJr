import { Injectable, signal } from '@angular/core';
import { Evento } from '../models/evento';

@Injectable({
    providedIn: 'root'
})
export class EventosService {

    private eventos = signal<Evento[]>([
        {
            id: 1,
            titulo: 'Arrumar bug da tela de login.',
            subtitulo: 'Meeting de alinhamento II.',
            data: new Date(2026, 8, 24),
            destaque: true
        },
        {
            id: 2,
            titulo: 'Reunião da equipe.',
            subtitulo: 'Planejamento semanal.',
            data: new Date(2026, 8, 25)
        },
        {
            id: 3,
            titulo: 'Entrega do projeto.',
            subtitulo: 'Revisão final.',
            data: new Date(2026, 8, 26)
        }
    ]);

    listarEventos() {
        return this.eventos;
    }
}