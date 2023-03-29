import { Main, Photo, InfoProduct, Icon } from "./Styles";
import { CartPurchase } from "../../Global/GlobalState";

export default function CardCartPurchase({
  foto,
  quantidade,
  total,
}: CartPurchase) {
  return (
    <Main>
      <Photo
        style={{
          backgroundImage: `url(${foto})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />
      <InfoProduct>
        <p>Quantidade:{quantidade}</p>
        <p>Preço:{total}</p>
      </InfoProduct>
    </Main>
  );
}
