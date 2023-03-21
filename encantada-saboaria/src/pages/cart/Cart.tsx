import CartProduct from "../../components/CartProduct/CartProduct";
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
