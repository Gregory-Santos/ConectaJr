export interface Tarefa {

  id: number;

  titulo: string;

  descricao: string;

  status:
    | 'backlog'
    | 'todo'
    | 'progress'
    | 'testing'
    | 'done';

  responsavel: string;

  prazo: string;

}