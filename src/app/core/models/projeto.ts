import { Skill } from './skill';

export interface Projeto {
    id: number;
    titulo: string;
    descricao: string;
    empresa: string;
    skills: Skill[];
    tipo: 'match' | 'suggestion';
    percentualMatch: number;
    participantes: number;
    modalidade: string;
    vagas: string[];
    avaliacao: number;
}