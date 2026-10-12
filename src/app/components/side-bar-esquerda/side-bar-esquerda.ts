import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PesquisaService } from '../../feats/barra-pesquisa/pesquisa-service';
import { PerfilUsuario } from '../../feats/perfil-usuario/perfil-usuario';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-side-bar-esquerda',
  styleUrl: './side-bar-esquerda.css',
  templateUrl: './side-bar-esquerda.html',
})
export class SideBarEsquerda {

  menuAberto = false;

  configuracoesAbertas = false;

  private pesquisa = inject(PesquisaService);

}
