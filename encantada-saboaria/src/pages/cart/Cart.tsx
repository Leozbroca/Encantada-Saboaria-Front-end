import CartProduct from "../../components/CardComponents/CartProductCart/CartProduct";
import ScrollTop from "../../components/ScrollTop/ScrollTop";
import { urlMercadoPago } from "../../constants/Url";
import { useGlobal } from "../../Global/GlobalStateContext";
import { Main } from "./Styles";

const Cart = () => {
  const { total } = useGlobal();

  return (
    <Main>
      <CartProduct total={total} />
      <ScrollTop />
    </Main>
  );
};

export default Cart;
