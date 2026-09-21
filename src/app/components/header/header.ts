import { Component, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';

@Component({
  imports: [FormField],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {

  pesquisaModel = signal<string>("");

  pesquisaForm = form(this.pesquisaModel);

  pesquisar(event: SubmitEvent) {
     event.preventDefault();

  }
}
