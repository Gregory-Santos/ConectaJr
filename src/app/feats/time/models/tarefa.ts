export interface Tarefa {
    id: number;
    titulo: string;
    descricao: string;
    status: 'backlog' | 'todo' | 'progresso' | 'testing' | 'done';
    responsavelId: number;
}