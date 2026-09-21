import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarEsquerda } from './components/side-bar-esquerda/side-bar-esquerda';

@Component({
  imports: [SideBarEsquerda],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
protected readonly title = signal('conecta-jr');
}
