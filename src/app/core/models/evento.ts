
export type TipoEvento = 'tarefa' | 'reuniao' | 'lembrete';
export interface Evento {
  id: string;
  titulo: string;
  descricao: string;
  data: string;     //formato: dia/mes/ano
  hora: string;     // '13:00'
  tipo: TipoEvento;
  concluido: boolean;
  
}
