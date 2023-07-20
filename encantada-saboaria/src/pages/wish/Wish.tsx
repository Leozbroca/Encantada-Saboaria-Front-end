import react from "react";
import { Main, PhotoBackgroundWish, MainWishProduct } from "./Styles";
import CardWish from "../../components/CardComponents/CardWish/CardWish";
import { useGlobal } from "../../Global/GlobalStateContext";
import ICartPurchase from "../../interface/ICartPurchase";
import ScrollTop from "../../components/ScrollTop/ScrollTop";

const Wish = () => {
  const { wish } = useGlobal();

  return (
    <Main>
      <PhotoBackgroundWish>
        <h1>Desejo</h1>
        <p>home {">"} Desejo</p>
      </PhotoBackgroundWish>
      <MainWishProduct>
        {wish.length > 0 ? (
          wish.map((wishProduct: ICartPurchase) => {
            return <CardWish key={wishProduct.id} {...wishProduct} />;
          })
        ) : (
          <p >Não há produtos na lista de desejos...</p>
        )}
      </MainWishProduct>
      <ScrollTop />
    </Main>
  );
};

export default Wish;
