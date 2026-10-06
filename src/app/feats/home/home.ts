import { Component, inject, signal } from '@angular/core';
import { FeedProjeto } from '../../core/service/feed-projeto';
import { Projeto } from '../../core/models/projeto';
import { BarraPesquisa } from '../barra-pesquisa/barra-pesquisa';
import { Agenda } from '../agenda/agenda';

@Component({
  selector: 'app-home',
  imports: [BarraPesquisa, Agenda],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  private feedService = inject(FeedProjeto);

  projetosMatch: Projeto[] = this.feedService.listarMatches();
  projetosSugestoes: Projeto[] = this.feedService.listarSugestoes();

  indiceAtual = signal(0);
  cardsPorPagina = 3;

  // Calcula o índice máximo possível
  private get maxIndice(): number {
    return Math.max(0, this.projetosMatch.length - this.cardsPorPagina);
  }

  
}