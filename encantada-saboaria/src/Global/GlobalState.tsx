import { ReactNode, useState } from "react";
import { urlMercadoPago } from "../constants/Url";
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
  sendPayment(total:any): Promise<void>
}

const GlobalState = ({ children }: ProductProviderProps) => {
  const [total, setTotal] = useState<CartPurchase[]>([]);

  
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
    const newCart = [...total];
    newCart.splice(findIndexProduct, 1);
    
    setTotal(newCart);
  };


  // "additional_info": {
  //   "items": [
  //     {
  //       "id": "MLB2907679857",
  //       "title": "Point Mini",
  //       "description": "Producto Point para cobros con tarjetas mediante bluetooth",
  //       "picture_url": "https://http2.mlstatic.com/resources/frontend/statics/growth-sellers-landings/device-mlb-point-i_medium@2x.png",
  //       "category_id": "electronics",
  //       "quantity": 1,
  //       "unit_price": 58.8
  //     },
  //     {
  //       "id": "MLB2907679857",
  //       "title": "Point Mini",
  //       "description": "Producto Point para cobros con tarjetas mediante bluetooth",
  //       "picture_url": "https://http2.mlstatic.com/resources/frontend/statics/growth-sellers-landings/device-mlb-point-i_medium@2x.png",
  //       "category_id": "electronics",
  //       "quantity": 1,
  //       "unit_price": 58.8
  //     },
  //     {
  //       "id": "MLB2907679857",
  //       "title": "Point Mini",
  //       "description": "Producto Point para cobros con tarjetas mediante bluetooth",
  //       "picture_url": "https://http2.mlstatic.com/resources/frontend/statics/growth-sellers-landings/device-mlb-point-i_medium@2x.png",
  //       "category_id": "electronics",
  //       "quantity": 1,
  //       "unit_price": 58.8
  //     }
  //   ],
  //   "payer": {
  //     "first_name": "Test",
  //     "last_name": "Test",
  //     "phone": {
  //       "area_code": 11,
  //       "number": "987654321"
  //     },
  //     "address": {}
  //   },
  //   "shipments": {
  //     "receiver_address": {
  //       "zip_code": "12312-123",
  //       "state_name": "Rio de Janeiro",
  //       "city_name": "Buzios",
  //       "street_name": "Av das Nacoes Unidas",
  //       "street_number": 3003
  //     }
  //   },
  //   "barcode": {}
  // },
  // "description": "Payment for product",
  // "external_reference": "MP0001",
  // "installments": 1,
  // "metadata": {},
  // "payer": {
  //   "entity_type": "individual",
  //   "type": "customer",
  //   "identification": {}
  // },
  // "payment_method_id": "visa",
  // "token": "ff8080814c11e237014c1ff593b57b4d",
  // "transaction_amount": 58.8
  async function sendPayment(total:any) {
    const body = {
      transaction_amount:total,
      description: "produtos da compra",
      payment_method_id: "pix",
      payer: {
        email: "gabriel@gmail.com",
        first_name: "",
        last_name: "",
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
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }

  return (
    <GlobalStateContext.Provider value={{ addToCart, total, setTotal , removeToCart, sendPayment}}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
