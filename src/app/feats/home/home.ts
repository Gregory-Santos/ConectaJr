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

  // ==========================================
  // AVANÇAR (com loop)
  // ==========================================
  proximo(): void {
    if (this.projetosMatch.length <= this.cardsPorPagina) {
      return; // não faz nada se não tiver cards suficientes
    }

    if (this.indiceAtual() < this.maxIndice) {
      this.indiceAtual.update(i => i + 1);
    } else {
      this.indiceAtual.set(0); // volta pro início
    }
  }

  // ==========================================
  // VOLTAR (com loop)
  // ==========================================
  anterior(): void {
    if (this.projetosMatch.length <= this.cardsPorPagina) {
      return;
    }

    if (this.indiceAtual() > 0) {
      this.indiceAtual.update(i => i - 1);
    } else {
      this.indiceAtual.set(this.maxIndice); // vai pro final
    }
  }
}