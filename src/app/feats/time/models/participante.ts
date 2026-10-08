export interface Atualizacao {
    id: number;
    descricao: string;
    data: string;
    horario: string;
}

export interface Participante {
    id: number;
    nome: string;
    foto: string;
    status: 'concluido' | 'andamento' | 'pendente';
    atualizacao: string;
    atualizacoes: Atualizacao[];
}