import { Skill } from './skill';

export interface Projeto {
    id: number;
    titulo: string;
    descricao: string;
    proposta: string;
    empresa: string;
    ferramenta: string;
    prazo: string;
    skills: Skill[];
    tipo: 'match' | 'suggestion';
    percentualMatch: number;
    participantes: number;
    limiteParticipantes: number;
    modalidade: string;
    vagas: string[];
    status: string;
    avaliacao: number;
    avaliacaoEmpresa: number;
}