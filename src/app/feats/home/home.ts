import { Component, inject } from '@angular/core';
import { ReuniaoService } from '../../core/service/reuniao';
import { ReuniaoCard } from './reuniao-card/reuniao-card';
@Component({
  imports: [ReuniaoCard],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  private reuniaoService = inject(ReuniaoService);
  reunioes = this.reuniaoService.getReunioes()
}
