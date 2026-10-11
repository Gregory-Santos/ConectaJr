import { Injectable } from '@angular/core';
import { Projeto } from '../models/projeto';
import { Skill } from '../models/skill';

@Injectable({
    providedIn: 'root'
})
export class FeedProjeto {
    private habilidadesCandidato: string[] = [
        'HTML',
        'CSS',
        'JavaScript',
        'Angular'
    ];
    private projetos = [
        {
            id: 1,
            titulo: 'Site institucional',
            descricao: 'Desenvolvimento de site institucional responsivo.',
            empresa: 'Senior Sistemas',
            skills: ['HTML', 'CSS', 'JavaScript', 'Angular'],
            participantes: 6,
            modalidade: 'Matutino',
            vagas: ['Front-end', 'UI/UX'],
            avaliacao: 4
        },
        {
            id: 2,
            titulo: 'Dashboard administrativo',
            descricao: 'Desenvolvimento de dashboard para gerenciamento.',
            empresa: 'Capgemini',
            skills: ['HTML', 'CSS', 'JavaScript', 'React'],
            participantes: 5,
            modalidade: 'Vespertino',
            vagas: ['Front-end', 'Back-end'],
            avaliacao: 5
        },
        {
            id: 3,
            titulo: 'Aplicação web',
            descricao: 'Desenvolvimento de aplicação web moderna.',
            empresa: 'Senior Sistemas',
            skills: ['Angular', 'TypeScript', 'Node.js'],
            participantes: 6,
            modalidade: 'Matutino',
            vagas: ['Front-end', 'Back-end'],
            avaliacao: 4
        },
        {
            id: 4,
            titulo: 'Aplicativo mobile',
            descricao: 'Desenvolvimento de aplicativo mobile.',
            empresa: 'Philips',
            skills: ['Flutter', 'Dart', 'Firebase'],
            participantes: 4,
            modalidade: 'Noturno',
            vagas: ['Mobile', 'UI/UX'],
            avaliacao: 4
        },
        {
            id: 5,
            titulo: 'Loja virtual',
            descricao: 'Criação de e-commerce completo e responsivo.',
            empresa: 'Capgemini',
            skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
            participantes: 6,
            modalidade: 'Matutino',
            vagas: ['Front-end', 'UI/UX', 'Back-end'],
            avaliacao: 5
        },
        {
            id: 6,
            titulo: 'Sistema financeiro',
            descricao: 'Desenvolvimento de sistema para controle financeiro.',
            empresa: 'Blusoft',
            skills: ['Angular', 'TypeScript', 'Node.js', 'SQL'],
            participantes: 5,
            modalidade: 'Vespertino',
            vagas: ['Front-end', 'Back-end'],
            avaliacao: 4
        },
        {
            id: 7,
            titulo: 'Aplicação React',
            descricao: 'Desenvolvimento de aplicação utilizando React.',
            empresa: 'Philips',
            skills: ['HTML', 'CSS', 'React', 'JavaScript'],
            participantes: 5,
            modalidade: 'Matutino',
            vagas: ['Front-end'],
            avaliacao: 4
        },
        {
            id: 8,
            titulo: 'API REST',
            descricao: 'Desenvolvimento de API para integração de sistemas.',
            empresa: 'Premiersoft',
            skills: ['Node.js', 'TypeScript', 'Express', 'MongoDB'],
            participantes: 4,
            modalidade: 'Noturno',
            vagas: ['Back-end'],
            avaliacao: 5
        },
        {
            id: 9,
            titulo: 'Sistema de vendas',
            descricao: 'Sistema para gerenciamento de vendas e clientes.',
            empresa: 'Ailos',
            skills: ['Angular', 'TypeScript', 'HTML', 'CSS'],
            participantes: 6,
            modalidade: 'Matutino',
            vagas: ['Front-end', 'Back-end'],
            avaliacao: 4
        },
        {
            id: 10,
            titulo: 'Portal de notícias',
            descricao: 'Desenvolvimento de portal de notícias responsivo.',
            empresa: 'Grupo OLX',
            skills: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
            participantes: 5,
            modalidade: 'Vespertino',
            vagas: ['Front-end', 'Design'],
            avaliacao: 4
        },
        {
            id: 11,
            titulo: 'Sistema de agendamento',
            descricao: 'Plataforma para agendamento de serviços.',
            empresa: 'Capgemini',
            skills: ['Angular', 'TypeScript', 'Firebase'],
            participantes: 5,
            modalidade: 'Matutino',
            vagas: ['Front-end', 'Back-end'],
            avaliacao: 5
        },
        {
            id: 12,
            titulo: 'Aplicativo de entregas',
            descricao: 'Aplicativo para gerenciamento de entregas.',
            empresa: 'Amazon',
            skills: ['Flutter', 'Dart', 'Firebase', 'Node.js'],
            participantes: 6,
            modalidade: 'Noturno',
            vagas: ['Mobile', 'Back-end'],
            avaliacao: 4
        },
        {
            id: 13,
            titulo: 'Landing Page',
            descricao: 'Criação de landing page para campanha digital.',
            empresa: 'Premiersoft',
            skills: ['HTML', 'CSS', 'JavaScript', 'Flutter'],
            participantes: 4,
            modalidade: 'Vespertino',
            vagas: ['Front-end', 'Design'],
            avaliacao: 5
        },
        {
            id: 14,
            titulo: 'Sistema de estoque',
            descricao: 'Sistema para controle de estoque e produtos.',
            empresa: 'Senior Sistemas',
            skills: ['Angular', 'TypeScript', 'SQL', 'Node.js'],
            participantes: 5,
            modalidade: 'Matutino',
            vagas: ['Front-end', 'Back-end'],
            avaliacao: 4
        },
        {
            id: 15,
            titulo: 'Rede social',
            descricao: 'Desenvolvimento de plataforma para interação entre usuários.',
            empresa: 'Grupo OLX',
            skills: ['React', 'JavaScript', 'Node.js', 'MongoDB'],
            participantes: 6,
            modalidade: 'Vespertino',
            vagas: ['Front-end', 'Back-end', 'UI/UX'],
            avaliacao: 5
        },
        {
            id: 16,
            titulo: 'Sistema educacional',
            descricao: 'Plataforma online para cursos e alunos.',
            empresa: 'Senior Sistemas',
            skills: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
            participantes: 7,
            modalidade: 'Matutino',
            vagas: ['Front-end', 'UI/UX'],
            avaliacao: 5
        },
        {
            id: 17,
            titulo: 'Site para restaurante',
            descricao: 'Site com cardápio digital e sistema de pedidos.',
            empresa: 'Capgemini',
            skills: ['HTML', 'CSS', 'JavaScript', 'React'],
            participantes: 4,
            modalidade: 'Noturno',
            vagas: ['Front-end', 'Design'],
            avaliacao: 4
        },
        {
            id: 18,
            titulo: 'Sistema de atendimento',
            descricao: 'Aplicação para gerenciamento de atendimento ao cliente.',
            empresa: 'Philips',
            skills: ['Angular', 'TypeScript', 'Node.js', 'SQL'],
            participantes: 6,
            modalidade: 'Vespertino',
            vagas: ['Front-end', 'Back-end'],
            avaliacao: 5
        },
        {
            id: 19,
            titulo: 'Aplicação de mapas',
            descricao: 'Sistema web utilizando mapas e localização.',
            empresa: 'Capgemini',
            skills: ['JavaScript', 'React', 'Node.js', 'Google Maps API'],
            participantes: 5,
            modalidade: 'Matutino',
            vagas: ['Front-end', 'Back-end'],
            avaliacao: 4
        },
        {
            id: 20,
            titulo: 'Plataforma de empregos',
            descricao: 'Sistema para conectar empresas e candidatos.',
            empresa: 'Karsten',
            skills: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Node.js'],
            participantes: 8,
            modalidade: 'Vespertino',
            vagas: ['Front-end', 'Back-end', 'UI/UX'],
            avaliacao: 5
        }
    ];
    listarProjetos(): Projeto[] {
        return this.projetos.map(projeto => {
            const skills = this.calcularSkills(projeto.skills);
            const percentualMatch = this.calcularPercentual(skills);
            return {
                id: projeto.id,
                titulo: projeto.titulo,
                descricao: projeto.descricao,
                empresa: projeto.empresa,
                skills,
                tipo: percentualMatch >= 50 ? 'match' : 'suggestion',
                percentualMatch,
                participantes: projeto.participantes,
                modalidade: projeto.modalidade,
                vagas: projeto.vagas,
                avaliacao: projeto.avaliacao
            };
        });
    }
    private calcularSkills(skillsProjeto: string[]): Skill[] {
        return skillsProjeto.map(skill => {
            const encontrado = this.habilidadesCandidato.includes(skill);
            return {
                name: skill,
                status: encontrado ? 'matched' : 'pending'
            };
        });
    }
    private calcularPercentual(skills: Skill[]): number {
        if (skills.length === 0) {
            return 0;
        }
        const matched = skills.filter(skill => skill.status === 'matched').length;
        return Math.round((matched / skills.length) * 100);
    }
    listarMatches(): Projeto[] {
        return this.listarProjetos().filter(projeto => projeto.tipo === 'match');
    }
    listarSugestoes(): Projeto[] {
        return this.listarProjetos().filter(projeto => projeto.tipo === 'suggestion');
    }
}