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
            descricao: 'A empresa precisa modernizar sua presença digital com um site responsivo, organizado e fácil de atualizar.',
            proposta: 'Desenvolver um novo site institucional para apresentar a empresa, seus serviços e informações de contato de forma clara e profissional.',
            empresa: 'Senior Sistemas',
            ferramenta: 'Website institucional responsivo',
            prazo: '6 semanas',
            skills: ['HTML', 'CSS', 'JavaScript', 'Angular'],
            participantes: 6,
            limiteParticipantes: 8,
            modalidade: 'Matutino',
            vagas: ['Front-end', 'UI/UX'],
            status: 'Em andamento',
            avaliacao: 4,
            avaliacaoEmpresa: 4.6
        },
        {
            id: 2,
            titulo: 'Dashboard administrativo',
            descricao: 'A equipe precisa centralizar indicadores e informações operacionais em uma interface que facilite a tomada de decisões.',
            proposta: 'Criar um dashboard administrativo com gráficos, indicadores e filtros para acompanhar dados de diferentes áreas da empresa.',
            empresa: 'Capgemini',
            ferramenta: 'Dashboard web administrativo',
            prazo: '8 semanas',
            skills: ['HTML', 'CSS', 'JavaScript', 'React'],
            participantes: 5,
            limiteParticipantes: 7,
            modalidade: 'Vespertino',
            vagas: ['Front-end', 'Back-end'],
            status: 'Em andamento',
            avaliacao: 5,
            avaliacaoEmpresa: 4.7
        },
        {
            id: 3,
            titulo: 'Aplicação web',
            descricao: 'O projeto busca substituir processos manuais por uma aplicação web centralizada e acessível para os usuários.',
            proposta: 'Desenvolver uma aplicação web moderna com componentes reutilizáveis, navegação intuitiva e integração com serviços de dados.',
            empresa: 'Senior Sistemas',
            ferramenta: 'Aplicação web',
            prazo: '10 semanas',
            skills: ['Angular', 'TypeScript', 'Node.js'],
            participantes: 6,
            limiteParticipantes: 8,
            modalidade: 'Matutino',
            vagas: ['Front-end', 'Back-end'],
            status: 'Em andamento',
            avaliacao: 4,
            avaliacaoEmpresa: 4.6
        },
        {
            id: 4,
            titulo: 'Aplicativo mobile',
            descricao: 'Existe a necessidade de disponibilizar uma experiência digital para usuários que acessam o serviço principalmente pelo celular.',
            proposta: 'Criar um aplicativo mobile com telas responsivas, navegação simples e integração com serviços de dados em tempo real.',
            empresa: 'Philips',
            ferramenta: 'Aplicativo mobile',
            prazo: '10 semanas',
            skills: ['Flutter', 'Dart', 'Firebase'],
            participantes: 4,
            limiteParticipantes: 6,
            modalidade: 'Noturno',
            vagas: ['Mobile', 'UI/UX'],
            status: 'Em planejamento',
            avaliacao: 4,
            avaliacaoEmpresa: 4.5
        },
        {
            id: 5,
            titulo: 'Loja virtual',
            descricao: 'A empresa busca uma experiência de compra digital mais organizada, rápida e adaptada a diferentes dispositivos.',
            proposta: 'Desenvolver um e-commerce com catálogo de produtos, navegação por categorias, carrinho e fluxo de compra.',
            empresa: 'Capgemini',
            ferramenta: 'E-commerce web',
            prazo: '10 semanas',
            skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
            participantes: 6,
            limiteParticipantes: 9,
            modalidade: 'Matutino',
            vagas: ['Front-end', 'UI/UX', 'Back-end'],
            status: 'Em andamento',
            avaliacao: 5,
            avaliacaoEmpresa: 4.7
        },
        {
            id: 6,
            titulo: 'Sistema financeiro',
            descricao: 'A equipe precisa de uma ferramenta para organizar lançamentos, movimentações e informações financeiras em um único ambiente.',
            proposta: 'Criar um sistema web para controle financeiro com cadastro de informações, visualização de dados e consultas por período.',
            empresa: 'Blusoft',
            ferramenta: 'Sistema financeiro web',
            prazo: '12 semanas',
            skills: ['Angular', 'TypeScript', 'Node.js', 'SQL'],
            participantes: 5,
            limiteParticipantes: 7,
            modalidade: 'Vespertino',
            vagas: ['Front-end', 'Back-end'],
            status: 'Em andamento',
            avaliacao: 4,
            avaliacaoEmpresa: 4.3
        },
        {
            id: 7,
            titulo: 'Aplicação React',
            descricao: 'O projeto propõe uma nova interface digital para melhorar a experiência dos usuários em diferentes dispositivos.',
            proposta: 'Desenvolver uma aplicação utilizando React, priorizando componentes reutilizáveis, responsividade e uma experiência de navegação consistente.',
            empresa: 'Philips',
            ferramenta: 'Aplicação web React',
            prazo: '8 semanas',
            skills: ['HTML', 'CSS', 'React', 'JavaScript'],
            participantes: 5,
            limiteParticipantes: 6,
            modalidade: 'Matutino',
            vagas: ['Front-end'],
            status: 'Em andamento',
            avaliacao: 4,
            avaliacaoEmpresa: 4.5
        },
        {
            id: 8,
            titulo: 'API REST',
            descricao: 'Diferentes sistemas precisam trocar informações de forma padronizada para reduzir processos manuais e facilitar integrações.',
            proposta: 'Desenvolver uma API REST responsável por disponibilizar dados e operações para consumo por aplicações externas.',
            empresa: 'Premiersoft',
            ferramenta: 'API REST',
            prazo: '8 semanas',
            skills: ['Node.js', 'TypeScript', 'Express', 'MongoDB'],
            participantes: 4,
            limiteParticipantes: 5,
            modalidade: 'Noturno',
            vagas: ['Back-end'],
            status: 'Em planejamento',
            avaliacao: 5,
            avaliacaoEmpresa: 4.8
        },
        {
            id: 9,
            titulo: 'Sistema de vendas',
            descricao: 'A empresa precisa organizar informações de vendas e clientes em uma ferramenta centralizada e de fácil utilização.',
            proposta: 'Criar um sistema web para cadastro de clientes, acompanhamento de vendas e consulta de informações comerciais.',
            empresa: 'Ailos',
            ferramenta: 'Sistema de gestão de vendas',
            prazo: '10 semanas',
            skills: ['Angular', 'TypeScript', 'HTML', 'CSS'],
            participantes: 6,
            limiteParticipantes: 8,
            modalidade: 'Matutino',
            vagas: ['Front-end', 'Back-end'],
            status: 'Em andamento',
            avaliacao: 4,
            avaliacaoEmpresa: 4.6
        },
        {
            id: 10,
            titulo: 'Portal de notícias',
            descricao: 'O objetivo é melhorar a forma como conteúdos e notícias são apresentados, facilitando a navegação e a leitura.',
            proposta: 'Desenvolver um portal responsivo para publicação e organização de notícias, categorias e conteúdos editoriais.',
            empresa: 'Grupo OLX',
            ferramenta: 'Portal de conteúdo',
            prazo: '6 semanas',
            skills: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
            participantes: 5,
            limiteParticipantes: 7,
            modalidade: 'Vespertino',
            vagas: ['Front-end', 'Design'],
            status: 'Em andamento',
            avaliacao: 4,
            avaliacaoEmpresa: 4.2
        },
        {
            id: 11,
            titulo: 'Sistema de agendamento',
            descricao: 'Usuários precisam conseguir consultar horários disponíveis e realizar agendamentos sem depender de processos manuais.',
            proposta: 'Desenvolver uma plataforma de agendamento com calendário, horários disponíveis, cadastro e confirmação de serviços.',
            empresa: 'Capgemini',
            ferramenta: 'Plataforma de agendamento',
            prazo: '8 semanas',
            skills: ['Angular', 'TypeScript', 'Firebase'],
            participantes: 5,
            limiteParticipantes: 7,
            modalidade: 'Matutino',
            vagas: ['Front-end', 'Back-end'],
            status: 'Em andamento',
            avaliacao: 5,
            avaliacaoEmpresa: 4.7
        },
        {
            id: 12,
            titulo: 'Aplicativo de entregas',
            descricao: 'O projeto busca facilitar o acompanhamento de pedidos e entregas desde a solicitação até a conclusão.',
            proposta: 'Criar um aplicativo mobile para gerenciamento de pedidos, acompanhamento de entregas e atualização do status das solicitações.',
            empresa: 'Amazon',
            ferramenta: 'Aplicativo mobile de entregas',
            prazo: '12 semanas',
            skills: ['Flutter', 'Dart', 'Firebase', 'Node.js'],
            participantes: 6,
            limiteParticipantes: 8,
            modalidade: 'Noturno',
            vagas: ['Mobile', 'Back-end'],
            status: 'Em desenvolvimento',
            avaliacao: 4,
            avaliacaoEmpresa: 4.5
        },
        {
            id: 13,
            titulo: 'Landing Page',
            descricao: 'Uma campanha digital precisa de uma página de conversão objetiva, visualmente atrativa e otimizada para diferentes telas.',
            proposta: 'Criar uma landing page com foco em apresentação da campanha, chamadas para ação e experiência de navegação.',
            empresa: 'Premiersoft',
            ferramenta: 'Landing page',
            prazo: '4 semanas',
            skills: ['HTML', 'CSS', 'JavaScript', 'Flutter'],
            participantes: 4,
            limiteParticipantes: 6,
            modalidade: 'Vespertino',
            vagas: ['Front-end', 'Design'],
            status: 'Em andamento',
            avaliacao: 5,
            avaliacaoEmpresa: 4.8
        },
        {
            id: 14,
            titulo: 'Sistema de estoque',
            descricao: 'A empresa precisa acompanhar produtos, entradas e saídas de estoque de maneira mais organizada e centralizada.',
            proposta: 'Desenvolver um sistema para cadastro e controle de produtos, movimentações e consultas de estoque.',
            empresa: 'Senior Sistemas',
            ferramenta: 'Sistema de controle de estoque',
            prazo: '10 semanas',
            skills: ['Angular', 'TypeScript', 'SQL', 'Node.js'],
            participantes: 5,
            limiteParticipantes: 7,
            modalidade: 'Matutino',
            vagas: ['Front-end', 'Back-end'],
            status: 'Em andamento',
            avaliacao: 4,
            avaliacaoEmpresa: 4.6
        },
        {
            id: 15,
            titulo: 'Rede social',
            descricao: 'O projeto busca criar um ambiente digital para interação entre usuários, compartilhamento de conteúdo e comunicação.',
            proposta: 'Desenvolver uma plataforma social com perfis, publicações, interações e estrutura preparada para crescimento.',
            empresa: 'Grupo OLX',
            ferramenta: 'Plataforma social web',
            prazo: '12 semanas',
            skills: ['React', 'JavaScript', 'Node.js', 'MongoDB'],
            participantes: 6,
            limiteParticipantes: 9,
            modalidade: 'Vespertino',
            vagas: ['Front-end', 'Back-end', 'UI/UX'],
            status: 'Em desenvolvimento',
            avaliacao: 5,
            avaliacaoEmpresa: 4.2
        },
        {
            id: 16,
            titulo: 'Sistema educacional',
            descricao: 'A proposta é centralizar cursos, conteúdos e informações de alunos em uma plataforma digital acessível.',
            proposta: 'Criar uma plataforma educacional para organização de cursos, alunos, conteúdos e acompanhamento das atividades.',
            empresa: 'Senior Sistemas',
            ferramenta: 'Plataforma educacional',
            prazo: '12 semanas',
            skills: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
            participantes: 7,
            limiteParticipantes: 9,
            modalidade: 'Matutino',
            vagas: ['Front-end', 'UI/UX'],
            status: 'Em andamento',
            avaliacao: 5,
            avaliacaoEmpresa: 4.6
        },
        {
            id: 17,
            titulo: 'Site para restaurante',
            descricao: 'O restaurante busca melhorar sua presença digital e permitir que clientes consultem o cardápio e realizem pedidos.',
            proposta: 'Desenvolver um site com cardápio digital, informações do estabelecimento e fluxo simplificado para pedidos.',
            empresa: 'Capgemini',
            ferramenta: 'Site com cardápio digital',
            prazo: '6 semanas',
            skills: ['HTML', 'CSS', 'JavaScript', 'React'],
            participantes: 4,
            limiteParticipantes: 6,
            modalidade: 'Noturno',
            vagas: ['Front-end', 'Design'],
            status: 'Em planejamento',
            avaliacao: 4,
            avaliacaoEmpresa: 4.7
        },
        {
            id: 18,
            titulo: 'Sistema de atendimento',
            descricao: 'A equipe precisa organizar solicitações de clientes e acompanhar cada atendimento em um único sistema.',
            proposta: 'Criar uma aplicação para registro, organização e acompanhamento de chamados e atendimentos.',
            empresa: 'Philips',
            ferramenta: 'Sistema de atendimento',
            prazo: '10 semanas',
            skills: ['Angular', 'TypeScript', 'Node.js', 'SQL'],
            participantes: 6,
            limiteParticipantes: 8,
            modalidade: 'Vespertino',
            vagas: ['Front-end', 'Back-end'],
            status: 'Em andamento',
            avaliacao: 5,
            avaliacaoEmpresa: 4.5
        },
        {
            id: 19,
            titulo: 'Aplicação de mapas',
            descricao: 'O projeto busca utilizar localização e mapas para apresentar informações geográficas de forma visual e interativa.',
            proposta: 'Desenvolver uma aplicação web com mapas interativos, marcadores, pesquisa de localização e integração com serviços de mapas.',
            empresa: 'Capgemini',
            ferramenta: 'Aplicação web com mapas',
            prazo: '8 semanas',
            skills: ['JavaScript', 'React', 'Node.js', 'Google Maps API'],
            participantes: 5,
            limiteParticipantes: 7,
            modalidade: 'Matutino',
            vagas: ['Front-end', 'Back-end'],
            status: 'Em desenvolvimento',
            avaliacao: 4,
            avaliacaoEmpresa: 4.7
        },
        {
            id: 20,
            titulo: 'Plataforma de empregos',
            descricao: 'O projeto propõe aproximar empresas e candidatos em uma experiência digital de descoberta e candidatura a oportunidades.',
            proposta: 'Desenvolver uma plataforma para publicação de projetos, descoberta de oportunidades, análise de compatibilidade e candidatura de profissionais.',
            empresa: 'Karsten',
            ferramenta: 'Plataforma de oportunidades',
            prazo: '12 semanas',
            skills: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Node.js'],
            participantes: 8,
            limiteParticipantes: 11,
            modalidade: 'Vespertino',
            vagas: ['Front-end', 'Back-end', 'UI/UX'],
            status: 'Em desenvolvimento',
            avaliacao: 5,
            avaliacaoEmpresa: 4.4
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
                proposta: projeto.proposta,
                empresa: projeto.empresa,
                ferramenta: projeto.ferramenta,
                prazo: projeto.prazo,
                skills,
                tipo: percentualMatch >= 50 ? 'match' : 'suggestion',
                percentualMatch,
                participantes: projeto.participantes,
                limiteParticipantes: projeto.limiteParticipantes,
                modalidade: projeto.modalidade,
                vagas: projeto.vagas,
                status: projeto.status,
                avaliacao: projeto.avaliacao,
                avaliacaoEmpresa: projeto.avaliacaoEmpresa
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
        return this.listarProjetos().filter(
            projeto => projeto.tipo === 'match'
        );
    }

    listarSugestoes(): Projeto[] {
        return this.listarProjetos().filter(
            projeto => projeto.tipo === 'suggestion'
        );
    }
}