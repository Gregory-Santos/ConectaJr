export interface Evento {
    id: number;
    titulo: string;
    subtitulo?: string;
    data: Date;
    destaque?: boolean;
}