import { ReactNode, useState } from "react";
import GlobalStateContext from "./GlobalStateContext";

interface ProductProviderProps {
  children: ReactNode;
}

export interface InterfaceProducts {
  categoria_id: string;
  descricao: string;
  essencia_id: string;
  foto: string;
  ingredientes: string;
  nome: string;
  preco: number;
  quantidade: number;
  tamanho: string;
  id: string;
}

export interface CartPurchase {
  id: string | undefined;
  total: number;
  nome: string | undefined;
  descricao: string | undefined;
  foto: string | undefined;
  preco: number | undefined;
  quantidade: number | undefined
}

export interface ProductContextData {
  total: CartPurchase[];
  setTotal: React.Dispatch<React.SetStateAction<CartPurchase[]>>;
  removeToCart: (id: string) => void
  addToCart: (item: CartPurchase) => void;
}

const GlobalState = ({ children }: ProductProviderProps) => {
  const [total, setTotal] = useState<CartPurchase[]>([]);

  /**
   * @author Gabriel Mina - Essa função ainda falta terminar , o valor do total não é alterado quando o produto é removido
   */
  const addToCart = (item: CartPurchase) => {
    const newProductShip = [...total];

    let findProduct = newProductShip.find((product) => product.id === item.id);

    // Se nao achar o produto , enviar ele no array. Se achar , substituir ele pelo item novo vindo do objeto
    if (!findProduct) {
      newProductShip.push(item);
      setTotal(newProductShip);
    } else {
      const novoCart = newProductShip.map((itemCart: CartPurchase) => {
        if (itemCart.id === item.id) {
          return {
            id: item.id,
            total: item.total,
            nome: item.nome,
            descricao: item.descricao,
            foto: item.foto,
            preco: item.preco,
            quantidade: item.quantidade
          };
        }
        return itemCart;
      });
      setTotal(novoCart);
    }
  };

  const removeToCart = (id: string) => {
    const findIndexProduct = total.findIndex((product) => product.id === id);
    console.log(id)
    const newCart = [...total];
    newCart.splice(findIndexProduct, 1);
    
    setTotal(newCart);
  };

  return (
    <GlobalStateContext.Provider value={{ addToCart, total, setTotal , removeToCart}}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
