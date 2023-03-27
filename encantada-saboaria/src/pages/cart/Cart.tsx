import CartProduct from "../../components/CartProductCart/CartProduct";
import { urlMercadoPago } from "../../constants/Url";
import { useGlobal } from "../../Global/GlobalStateContext";
import { Main } from "./Styles";
import * as dotenv from "dotenv";

const Cart = () => {
  dotenv.config();
  const { total } = useGlobal();

  async function enviarPagamento() {
    const body = {
      transaction_amount: 10,
      description: "produto",
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
    <Main>
      <button onClick={() => enviarPagamento()}>Pagamento</button>
      <CartProduct total={total} />
    </Main>
  );
};

export default Cart;
