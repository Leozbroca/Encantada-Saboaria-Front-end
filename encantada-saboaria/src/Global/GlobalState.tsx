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
  addTo: (
    products: ICartPurchase[],
    product: ICartPurchase,
    setProducts: React.Dispatch<React.SetStateAction<ICartPurchase[]>>,
    keyLocalStorage: string
  ) => void;
  sendPayment(total: any): Promise<void>;
  totalCart: number;
  totalProductsCart: number;
  loginOpen: IModal;
  forgotOpen: IModal;
  registerOpen: IModal;
  hamburguerOpen: IModal;
  errorCartEmpty: string;
  total: ICartPurchase[];
  setTotal: React.Dispatch<React.SetStateAction<ICartPurchase[]>>;
  setTotalProductsCart: React.Dispatch<React.SetStateAction<number>>;
  wish: ICartPurchase[];
  setWish: React.Dispatch<React.SetStateAction<ICartPurchase[]>>;
  remove: (
    id: string,
    products: ICartPurchase[],
    setProducts: React.Dispatch<React.SetStateAction<ICartPurchase[]>>,
    keyLocalStorage: string
  ) => void;
}

const GlobalState = ({ children }: ProductProviderProps) => {
  const [totalCart, setTotalCart] = useState(0);
  const [errorCartEmpty, setErrorCartEmpty] = useState("");
  const [totalProductsCart, setTotalProductsCart] = useState(0);

  const forgotOpen = useDisclosure();
  const registerOpen = useDisclosure();
  const loginOpen = useDisclosure();
  const hamburguerOpen = useDisclosure();

  const [total, setTotal] = useState<ICartPurchase[]>(() => {
    const storageProduct = localStorage.getItem("products");
    if (storageProduct) {
      return JSON.parse(storageProduct);
    }
    return [];
  });

  const [wish, setWish] = useState<ICartPurchase[]>(() => {
    const storageWish = localStorage.getItem("Wish");
    if (storageWish) {
      return JSON.parse(storageWish);
    }
    return [];
  });

  const addTo = (
    products: ICartPurchase[],
    product: ICartPurchase,
    setProducts: React.Dispatch<React.SetStateAction<ICartPurchase[]>>,
    keyLocalStorage: string
  ) => {
    const newProduct = [...products];

    let findProduct = newProduct.find(
      (productFind) => productFind.id === product.id
    );

    if (!findProduct) {
      newProduct.push(product);
      setProducts(newProduct);
      localStorage.setItem(`${keyLocalStorage}`, JSON.stringify(newProduct));
    } else {
      const novoCart = newProduct.map((itemCart: ICartPurchase) => {
        if (itemCart.id === product.id) {
          return {
            id: product.id,
            total: product.total,
            nome: product.nome,
            descricao: product.descricao,
            foto: product.foto,
            preco: product.preco,
            quantidade: product.quantidade,
          };
        }
        return itemCart;
      });
      setProducts(novoCart);
      localStorage.setItem(`${keyLocalStorage}`, JSON.stringify(novoCart));
    }
  };

  const remove = (
    id: string,
    products: ICartPurchase[],
    setProducts: React.Dispatch<React.SetStateAction<ICartPurchase[]>>,
    keyLocalStorage: string
  ) => {
    const findIndexProduct = products.findIndex((product) => product.id === id);

    const newProduct = [...products];
    newProduct.splice(findIndexProduct, 1);

    setProducts(newProduct);
    localStorage.setItem(`${keyLocalStorage}`, JSON.stringify(newProduct));
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

  return (
    <GlobalStateContext.Provider
      value={{
        remove,
        total,
        setTotal,
        wish,
        setWish,
        addTo,
        totalProductsCart,
        setTotalProductsCart,
        sendPayment,
        totalCart,
        forgotOpen,
        registerOpen,
        loginOpen,
        hamburguerOpen,
        errorCartEmpty,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
