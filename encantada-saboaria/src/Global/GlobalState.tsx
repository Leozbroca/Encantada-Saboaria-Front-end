import { useDisclosure } from "@chakra-ui/react";
import { ReactNode, useEffect, useState } from "react";
import { urlMercadoPago } from "../constants/Url";
import GlobalStateContext from "./GlobalStateContext";
import ICartPurchase from "../interface/ICartPurchase";

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

export interface ProductContextData {
  total: ICartPurchase[];
  setTotal: React.Dispatch<React.SetStateAction<ICartPurchase[]>>;
  removeToCart: (id: string) => void;
  addToCart: (item: ICartPurchase) => void;
  sendPayment(total: any): Promise<void>;
  totalCart: number;
  loginOpen: IModal;
  forgotOpen: IModal;
  registerOpen: IModal;
  errorCartEmpty: string;
  wish: ICartPurchase[];
  addToWish: (item: ICartPurchase) => void;
}

const GlobalState = ({ children }: ProductProviderProps) => {
  const [total, setTotal] = useState<ICartPurchase[]>([]);
  const [wish, setWish] = useState<ICartPurchase[]>([]);
  const [totalCart, setTotalCart] = useState(0);
  const [errorCartEmpty, setErrorCartEmpty] = useState("");

  const addToWish = (item: ICartPurchase) => {
    const newProductWish = [...wish];

    let findWishProduct = newProductWish.find(
      (product: ICartPurchase) => product.id === item.id
    );

    if (!findWishProduct) {
      newProductWish.push(item);
      setWish(newProductWish);
      localStorage.setItem("Wish", JSON.stringify(newProductWish));
    } else {
      const newWish = newProductWish.map((itemCart: ICartPurchase) => {
        if (itemCart.id === item.id) {
          return {
            id: item.id,
            total: item.total,
            nome: item.nome,
            descricao: item.descricao,
            foto: item.foto,
            preco: item.preco,
            quantidade: item.quantidade! + 1,
          };
        }
        return itemCart;
      });
      setWish(newWish);
      localStorage.setItem("Wish", JSON.stringify(newWish));
    }
  };

  const addToCart = (item: ICartPurchase) => {
    const newProductShip = [...total];

    let findProduct = newProductShip.find((product) => product.id === item.id);

    // Se nao achar o produto , enviar ele no array. Se achar , substituir ele pelo item novo vindo do objeto
    if (!findProduct) {
      newProductShip.push(item);
      setTotal(newProductShip);
      localStorage.setItem("products", JSON.stringify(newProductShip));
    } else {
      const novoCart = newProductShip.map((itemCart: ICartPurchase) => {
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

    setTotal(newCart);
  };

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
        wish,
        addToWish,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
