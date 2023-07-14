import ICartPurchase from "../../../interface/ICartPurchase";
import { Main, Photo, InfoProduct, Icon } from "./Styles";

export default function CardCartPurchase({
  foto,
  quantidade,
  total,
}: ICartPurchase) {
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
