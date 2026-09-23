
import { Component, inject } from '@angular/core';
import { FeedProjeto } from '../../core/service/feed-projeto';
import { Projeto } from '../../core/models/projeto';

@Component({
  selector: 'app-home',

  imports: [],

  templateUrl: './home.html',

  styleUrl: './home.css'
})
export class Home {

  /*
   * Injeta o Service.
   */
  private feedService = inject(FeedProjeto);


  /*
   * Projetos que combinam com o candidato.
   */
  projetosMatch: Projeto[] =
    this.feedService.listarMatches();


  /*
   * Projetos que são apenas sugestões.
   */
  projetosSugestoes: Projeto[] =
    this.feedService.listarSugestoes();

}