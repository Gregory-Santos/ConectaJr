import { Component, computed, inject } from '@angular/core';
import { FeedProjeto } from '../../core/service/feed-projeto';
import { PesquisaService } from '../barra-pesquisa/pesquisa-service';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-busca',
  styleUrl: './busca.css',
  templateUrl: './busca.html',
})
export class Busca {
  private feed = inject(FeedProjeto);
  private pesquisa = inject(PesquisaService);

  // todos os projetos, sem separar entre match e sugestão
  private todos = this.feed.listarProjetos();

  projetos = computed(() => this.pesquisa.filtrar(this.todos));
  termo = this.pesquisa.termo;
}