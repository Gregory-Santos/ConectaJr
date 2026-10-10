import { Component, inject } from '@angular/core';
import { PesquisaService } from './pesquisa-service';

@Component({
  imports: [],
  selector: 'app-barra-pesquisa',
  styleUrl: './barra-pesquisa.css',
  templateUrl: './barra-pesquisa.html',
})
export class BarraPesquisa {
  private pesquisa = inject(PesquisaService);

  aoDigitar(event: Event) {
    const input = event.target as HTMLInputElement;
    this.pesquisa.termo.set(input.value);
}
}