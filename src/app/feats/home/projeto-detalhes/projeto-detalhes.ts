import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FeedProjeto } from '../../../core/service/feed-projeto';
import { Projeto } from '../../../core/models/projeto';

@Component({
    selector: 'app-projeto-detalhes',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './projeto-detalhes.html',
    styleUrl: './projeto-detalhes.css'
})
export class ProjetoDetalhes {
    private route = inject(ActivatedRoute);
    private feedService = inject(FeedProjeto);

    projetos = this.feedService.listarProjetos();

    projeto = computed<Projeto | undefined>(() => {
        const id = Number(this.route.snapshot.paramMap.get('id'));

        return this.projetos.find(projeto => projeto.id === id);
    });

    projetosRecomendados = computed(() =>
        this.projetos
            .filter(projeto => projeto.id !== this.projeto()?.id)
            .slice(0, 3)
    );
}