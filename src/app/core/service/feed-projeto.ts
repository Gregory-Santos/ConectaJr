
import { Service } from '@angular/core';
import { Projeto } from '../models/projeto';
import { Skill } from '../models/skill';

@Service()
export class FeedProjeto  {

  /*
   * Habilidades do candidato.
   *
   * Futuramente isso poderá vir
   * do perfil do usuário.
   */
  private habilidadesCandidato: string[] = [

    'HTML',
    'CSS',
    'JavaScript',
    'Angular'

  ];


  /*
   * Projetos disponíveis.
   *
   * Aqui colocamos somente as habilidades
   * necessárias para cada projeto.
   */
  private projetos = [

  {
    id: 1,
    titulo: 'Site institucional',
    descricao: 'Desenvolvimento de site institucional responsivo.',
    empresa: 'Empresa Alpha',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'Angular'
    ]
  },

  {
    id: 2,
    titulo: 'Dashboard administrativo',
    descricao: 'Desenvolvimento de dashboard para gerenciamento.',
    empresa: 'Tech Solutions',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React'
    ]
  },

  {
    id: 3,
    titulo: 'Aplicação web',
    descricao: 'Desenvolvimento de aplicação web moderna.',
    empresa: 'Startup XYZ',
    skills: [
      'Angular',
      'TypeScript',
      'Node.js'
    ]
  },

  {
    id: 4,
    titulo: 'Aplicativo mobile',
    descricao: 'Desenvolvimento de aplicativo mobile.',
    empresa: 'Mobile Company',
    skills: [
      'Flutter',
      'Dart',
      'Firebase'
    ]
  },

  {
    id: 5,
    titulo: 'Loja virtual',
    descricao: 'Criação de e-commerce completo e responsivo.',
    empresa: 'Digital Store',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript'
    ]
  },

  {
    id: 6,
    titulo: 'Sistema financeiro',
    descricao: 'Desenvolvimento de sistema para controle financeiro.',
    empresa: 'Finance Tech',
    skills: [
      'Angular',
      'TypeScript',
      'Node.js',
      'SQL'
    ]
  },

  {
    id: 7,
    titulo: 'Aplicação React',
    descricao: 'Desenvolvimento de aplicação utilizando React.',
    empresa: 'Web Masters',
    skills: [
      'HTML',
      'CSS',
      'React',
      'JavaScript'
    ]
  },

  {
    id: 8,
    titulo: 'API REST',
    descricao: 'Desenvolvimento de API para integração de sistemas.',
    empresa: 'Backend Solutions',
    skills: [
      'Node.js',
      'TypeScript',
      'Express',
      'MongoDB'
    ]
  },

  {
    id: 9,
    titulo: 'Sistema de vendas',
    descricao: 'Sistema para gerenciamento de vendas e clientes.',
    empresa: 'Commerce Tech',
    skills: [
      'Angular',
      'TypeScript',
      'HTML',
      'CSS'
    ]
  },

  {
    id: 10,
    titulo: 'Portal de notícias',
    descricao: 'Desenvolvimento de portal de notícias responsivo.',
    empresa: 'News Digital',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'WordPress'
    ]
  },

  {
    id: 11,
    titulo: 'Sistema de agendamento',
    descricao: 'Plataforma para agendamento de serviços.',
    empresa: 'Schedule App',
    skills: [
      'Angular',
      'TypeScript',
      'Firebase'
    ]
  },

  {
    id: 12,
    titulo: 'Aplicativo de entregas',
    descricao: 'Aplicativo para gerenciamento de entregas.',
    empresa: 'Delivery Tech',
    skills: [
      'Flutter',
      'Dart',
      'Firebase',
      'Node.js'
    ]
  },

  {
    id: 13,
    titulo: 'Landing Page',
    descricao: 'Criação de landing page para campanha digital.',
    empresa: 'Marketing Digital',
    skills: [
      'HTML',
      'CSS',
      'JavaScript'
    ]
  },

  {
    id: 14,
    titulo: 'Sistema de estoque',
    descricao: 'Sistema para controle de estoque e produtos.',
    empresa: 'Stock Manager',
    skills: [
      'Angular',
      'TypeScript',
      'SQL',
      'Node.js'
    ]
  },

  {
    id: 15,
    titulo: 'Rede social',
    descricao: 'Desenvolvimento de plataforma para interação entre usuários.',
    empresa: 'Social Connect',
    skills: [
      'React',
      'JavaScript',
      'Node.js',
      'MongoDB'
    ]
  },

  {
    id: 16,
    titulo: 'Sistema educacional',
    descricao: 'Plataforma online para cursos e alunos.',
    empresa: 'EduTech',
    skills: [
      'Angular',
      'TypeScript',
      'HTML',
      'CSS',
      'Firebase'
    ]
  },

  {
    id: 17,
    titulo: 'Site para restaurante',
    descricao: 'Site com cardápio digital e sistema de pedidos.',
    empresa: 'Food Digital',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React'
    ]
  },

  {
    id: 18,
    titulo: 'Sistema de atendimento',
    descricao: 'Aplicação para gerenciamento de atendimento ao cliente.',
    empresa: 'Customer Tech',
    skills: [
      'Angular',
      'TypeScript',
      'Node.js',
      'SQL'
    ]
  },

  {
    id: 19,
    titulo: 'Aplicação de mapas',
    descricao: 'Sistema web utilizando mapas e localização.',
    empresa: 'Map Solutions',
    skills: [
      'JavaScript',
      'React',
      'Node.js',
      'Google Maps API'
    ]
  },

  {
    id: 20,
    titulo: 'Plataforma de empregos',
    descricao: 'Sistema para conectar empresas e candidatos.',
    empresa: 'Career Tech',
    skills: [
      'Angular',
      'TypeScript',
      'HTML',
      'CSS',
      'Node.js'
    ]
  }

];


  /*
   * Monta os projetos já com as informações
   * de compatibilidade.
   */
  listarProjetos(): Projeto[] {

    return this.projetos.map(projeto => {

      const skills = this.calcularSkills(
        projeto.skills
      );

      const percentualMatch =
        this.calcularPercentual(skills);

      return {

        id: projeto.id,

        titulo: projeto.titulo,

        descricao: projeto.descricao,

        empresa: projeto.empresa,

        skills: skills,

        tipo:
          percentualMatch >= 50
            ? 'match'
            : 'suggestion',

        percentualMatch

      };

    });

  }


  /*
   * Compara as habilidades do projeto
   * com as habilidades do candidato.
   */
  private calcularSkills(
    skillsProjeto: string[]
  ): Skill[] {

    return skillsProjeto.map(skill => {

      const encontrado =
        this.habilidadesCandidato.includes(skill);

      return {

        name: skill,

        status:
          encontrado
            ? 'matched'
            : 'pending'

      };

    });

  }


  /*
   * Calcula a porcentagem de compatibilidade.
   */
  private calcularPercentual(
    skills: Skill[]
  ): number {

    if (skills.length === 0) {

      return 0;

    }

    const matched =
      skills.filter(
        skill => skill.status === 'matched'
      ).length;

    return Math.round(
      (matched / skills.length) * 100
    );

  }


  /*
   * Somente projetos compatíveis.
   */
  listarMatches(): Projeto[] {

    return this.listarProjetos()
      .filter(
        projeto => projeto.tipo === 'match'
      );

  }


  /*
   * Somente sugestões.
   */
  listarSugestoes(): Projeto[] {

    return this.listarProjetos()
      .filter(
        projeto => projeto.tipo === 'suggestion'
      );

  }

}