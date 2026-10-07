import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-side-bar-esquerda',
  styleUrl: './side-bar-esquerda.css',
  templateUrl: './side-bar-esquerda.html',
})
export class SideBarEsquerda {

  menuAberto = false;
}
