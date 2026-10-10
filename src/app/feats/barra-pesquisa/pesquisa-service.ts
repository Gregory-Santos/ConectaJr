import { Service, signal } from '@angular/core';

@Service()
export class PesquisaService {
    termo = signal('');
}