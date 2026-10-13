import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-perfil-usuario',
  styleUrl: './perfil-usuario.css',
  templateUrl: './perfil-usuario.html',
})
export class PerfilUsuario {

menuPerfilAberto = signal(false);

alternarMenuPerfil() {
  this.menuPerfilAberto.update(aberto => !aberto);
}

fecharMenuPerfil() {
  this.menuPerfilAberto.set(false);
}

editarPerfil() {
  this.fecharMenuPerfil();
  // Abrir a edição do perfil aqui.
}

compartilharPerfil() {
  this.fecharMenuPerfil();

  if (navigator.share) {
    navigator.share({
      title: 'Meu perfil no Conecta',
      url: window.location.href
    });
  } else {
    navigator.clipboard.writeText(window.location.href);
  }
}

}
