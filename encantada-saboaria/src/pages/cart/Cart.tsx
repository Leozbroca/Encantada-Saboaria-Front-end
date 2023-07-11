import CartProduct from "../../components/CartProductCart/CartProduct";
import { urlMercadoPago } from "../../constants/Url";
import { useGlobal } from "../../Global/GlobalStateContext";
import { Main } from "./Styles";

const Cart = () => {
  const { total } = useGlobal();

  return (
    <Main>
      <CartProduct total={total} />
    </Main>
  );
};

export default Cart;
