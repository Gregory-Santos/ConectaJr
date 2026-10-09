import { Component, input, output } from '@angular/core';

@Component({
    selector: 'app-nav-time',
    standalone: true,
    imports: [],
    templateUrl: './nav-time.html',
    styleUrl: './nav-time.css'
})
export class NavTime {
    abaAtiva = input<'kanban' | 'tarefas' | 'calendario'>('kanban');
    abaSelecionada = output<'kanban' | 'tarefas' | 'calendario'>();
    selecionarAba(aba: 'kanban' | 'tarefas' | 'calendario') {
        this.abaSelecionada.emit(aba);
    }
}