export interface IProductDetail {
  _id: string;
  nome: string;
  foto: string;
  preco: number;
  descricao: string;
  quantidade: number;
  tamanho: string;
  categoria_id?: string;
  essencia_id?: string;
}
