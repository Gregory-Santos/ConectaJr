import { Component, computed, inject, linkedSignal } from '@angular/core';
import { FeedProjeto } from '../../core/service/feed-projeto';
import { Projeto } from '../../core/models/projeto';
import { PesquisaService } from '../barra-pesquisa/pesquisa-service';
import { Agenda } from '../agenda/agenda';

@Component({
  selector: 'app-home',
  imports: [Agenda],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  private feedService = inject(FeedProjeto);
  private pesquisa = inject(PesquisaService);

  // listas completas (chamadas uma vez só)
  private todosMatch: Projeto[] = this.feedService.listarMatches();
  private todasSugestoes: Projeto[] = this.feedService.listarSugestoes();

  // listas filtradas pela busca (é o que o HTML usa)
  matchesFiltrados = computed(() => this.filtrar(this.todosMatch));
  sugestoesFiltradas = computed(() => this.filtrar(this.todasSugestoes));

  // volta pra 0 sempre que o termo da busca mudar
  indiceAtual = linkedSignal({
    source: this.pesquisa.termo,
    computation: () => 0,
  });

  cardsPorPagina = 3;

  private get maxIndice(): number {
    return Math.max(0, this.matchesFiltrados().length - this.cardsPorPagina);
  }

  proximo(): void {
    if (this.matchesFiltrados().length <= this.cardsPorPagina) return;

    if (this.indiceAtual() < this.maxIndice) {
      this.indiceAtual.update(i => i + 1);
    } else {
      this.indiceAtual.set(0);
    }
  }

  anterior(): void {
    if (this.matchesFiltrados().length <= this.cardsPorPagina) return;

    if (this.indiceAtual() > 0) {
      this.indiceAtual.update(i => i - 1);
    } else {
      this.indiceAtual.set(this.maxIndice);
    }
  }

  // ==========================================
  // BUSCA
  // ==========================================
  private filtrar(lista: Projeto[]): Projeto[] {
    const termo = this.normalizar(this.pesquisa.termo());
    if (!termo) return lista;

    return lista.filter(p =>
      this.normalizar(p.empresa).includes(termo) ||
      this.normalizar(p.titulo).includes(termo) ||
      p.skills.some(
        s => s.status === 'pending' && this.normalizar(s.name).includes(termo)
      )
    );
  }

  // ignora maiúsculas e acentos
  private normalizar(texto: string): string {
    return texto
      .trim()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }
}