export type Tarefa = {
  id: number;
  titulo: string | null;
  descricao: string | null;
  concluido: boolean | null;
  dataCriacao: string;
  dataExclusao: string;
  prioridade: {
    id: number;
    codigo: string;
    cor: string;
    descricao: string;
  };
};
