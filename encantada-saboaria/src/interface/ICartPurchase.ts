interface ICartPurchase {
  id: string | undefined;
  total: number;
  nome: string | undefined;
  descricao: string | undefined;
  foto: string | undefined;
  preco: number | undefined;
  quantidade: number | undefined;
}

export default ICartPurchase;
