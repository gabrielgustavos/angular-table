export interface Funcionario {
  id?: number;
  nome: string;
  sobrenome: string;
  departamento: string;
  turno: string;
  dataDeCriacao?:string;
  dataDeAlteracao?: string;
  ativo: boolean;
}