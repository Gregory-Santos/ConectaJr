import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarEsquerda } from './components/side-bar-esquerda/side-bar-esquerda';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Dashboard } from './feats/dashboard/dashboard';

@Component({
  imports: [SideBarEsquerda, Footer, RouterOutlet, Header],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('conecta-jr');
}
