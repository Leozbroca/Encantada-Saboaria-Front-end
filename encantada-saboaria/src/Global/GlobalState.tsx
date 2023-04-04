import { useDisclosure } from "@chakra-ui/react";
import { ReactNode, useEffect, useState } from "react";
import { urlMercadoPago } from "../constants/Url";
import GlobalStateContext from "./GlobalStateContext";

interface ProductProviderProps {
  children: ReactNode;
}

export interface IModal {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
  isControlled: boolean;
  getButtonProps: (props?: any) => any;
  getDisclosureProps: (props?: any) => any;
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
  quantidade: number | undefined;
}

export interface ProductContextData {
  total: CartPurchase[];
  setTotal: React.Dispatch<React.SetStateAction<CartPurchase[]>>;
  removeToCart: (id: string) => void;
  addToCart: (item: CartPurchase) => void;
  sendPayment(total: any): Promise<void>;
  totalCart: number;
  loginOpen: IModal;
  forgotOpen: IModal;
  registerOpen: IModal;
  errorCartEmpty: string;
}

const GlobalState = ({ children }: ProductProviderProps) => {
  const [total, setTotal] = useState<CartPurchase[]>([]);
  const [totalCart, setTotalCart] = useState(0);
  const [errorCartEmpty, setErrorCartEmpty] = useState("");

  const addToCart = (item: CartPurchase) => {
    const newProductShip = [...total];

    let findProduct = newProductShip.find((product) => product.id === item.id);

    // Se nao achar o produto , enviar ele no array. Se achar , substituir ele pelo item novo vindo do objeto
    if (!findProduct) {
      newProductShip.push(item);
      setTotal(newProductShip);
      localStorage.setItem("products", JSON.stringify(newProductShip));
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
            quantidade: item.quantidade,
          };
        }
        return itemCart;
      });
      setTotal(novoCart);
      localStorage.setItem("products", JSON.stringify(novoCart));
    }
  };

  const removeToCart = (id: string) => {
    const findIndexProduct = total.findIndex((product) => product.id === id);
    const newCart = [...total];
    newCart.splice(findIndexProduct, 1);
    window.localStorage.setItem("products",JSON.stringify(newCart))
    setTotal(newCart);
  };

  useEffect(() => {
    let totalCartReduce;
    totalCartReduce = total.reduce((item, current) => item + current.total, 0);
    setTotalCart(totalCartReduce);
  }, [total]);

  async function sendPayment(total: any) {
    const body = {
      transaction_amount: total.totalCart,
      description: "produtos",
      payment_method_id: total.methodPayment,
      payer: {
        email: "gabriel@gmail.com",
        first_name: "Gabriel",
        last_name: "Mina",
        address: {},
        identification: {
          type: "CPF",
          number: "01234567890",
        },
      },
      notification_url: "https://eo3qhcthydohsdu.m.pipedream.net",
    };
    console.log(body);

    await urlMercadoPago
      .post("v1/payments", body, {
        headers: {
          Authorization: `Bearer APP_USR-8343996514678322-032712-f3a4f740d747d6d9c2ea6b06c5affaf2-433676947`,
        },
      })
      .then((response) => {
        console.log(response.data);
        window.location.href =
          response.data.point_of_interaction.transaction_data.ticket_url;
        setErrorCartEmpty("");
      })
      .catch((error) => {
        if (
          error.response.data.message.includes(
            "transaction_amount must be positive"
          )
        ) {
          setErrorCartEmpty(
            "Não é possivel finalizar compra com carrinho vazio"
          );
        }
      });
  }

  const forgotOpen = useDisclosure();
  const registerOpen = useDisclosure();
  const loginOpen = useDisclosure();

  return (
    <GlobalStateContext.Provider
      value={{
        addToCart,
        total,
        setTotal,
        removeToCart,
        sendPayment,
        totalCart,
        forgotOpen,
        registerOpen,
        loginOpen,
        errorCartEmpty,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
