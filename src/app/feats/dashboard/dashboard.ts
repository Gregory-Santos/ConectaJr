import { Component } from '@angular/core';
import { Agenda } from '../agenda/agenda';

@Component({
  imports: [Agenda],
  selector: 'app-dashboard',
  styleUrl: './dashboard.css',
  templateUrl: './dashboard.html',
})
export class Dashboard {}
