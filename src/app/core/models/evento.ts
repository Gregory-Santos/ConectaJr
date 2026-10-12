
export type TipoEvento = 'tarefa' | 'reuniao' | 'lembrete';
export interface Evento {
  id: string;
  titulo: string;
  descricao: string;
  data: string;     
  hora: string;     
  tipo: TipoEvento;
  concluido: boolean;
  
}
