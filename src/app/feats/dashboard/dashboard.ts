import { Component, computed, inject } from '@angular/core';
import { Agenda } from '../agenda/agenda';
import { Calendario } from '../../core/service/calendario';

@Component({
  imports: [Agenda],
  selector: 'app-dashboard',
  styleUrl: './dashboard.css',
  templateUrl: './dashboard.html',
})
export class Dashboard {
   
    private Calendario = inject(Calendario);
    eventos = computed(() => this.Calendario.eventos());
    

}
