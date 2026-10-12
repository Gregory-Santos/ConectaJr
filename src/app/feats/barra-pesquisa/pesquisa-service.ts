import { Service, signal } from '@angular/core';
import { Projeto } from '../../core/models/projeto';

@Service()
export class PesquisaService {
    termo = signal('');

    filtrar(lista: Projeto[]): Projeto[] {
        const termo = this.normalizar(this.termo());
        if (!termo) return lista;

        return lista.filter(p =>
            this.normalizar(p.empresa).includes(termo) ||
            this.normalizar(p.titulo).includes(termo) ||
            p.skills.some(
                s => s.status === 'pending' && this.normalizar(s.name).includes(termo)
            )
        );
    }

    private normalizar(texto: string): string {
        return texto
            .trim()
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '');
    }

    limpar(): void {
        this.termo.set('');
    }
}