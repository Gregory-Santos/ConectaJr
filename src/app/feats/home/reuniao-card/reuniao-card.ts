import { Component, input } from '@angular/core';
import { Reuniao } from '../../../core/models/reuniao';

@Component({
  imports: [],
  selector: 'app-reuniao-card',
  styleUrl: './reuniao-card.css',
  templateUrl: './reuniao-card.html',
})
export class ReuniaoCard {
  reuniao = input.required<Reuniao>();
}
