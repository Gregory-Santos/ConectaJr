import { Component, inject } from '@angular/core';
import { PesquisaService } from './pesquisa-service';

@Component({
  selector: 'app-barra-pesquisa',
  templateUrl: './barra-pesquisa.html',
  styleUrl: './barra-pesquisa.css',
})
export class BarraPesquisa {
  private pesquisa = inject(PesquisaService);

  termo = this.pesquisa.termo;

  aoDigitar(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.pesquisa.termo.set(input.value);
  }
}