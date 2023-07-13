import react from "react";
import { Main, PhotoBackgroundWish, MainWishProduct } from "./Styles";
import CardWish from "../../components/CardWish/CardWish";
import { useGlobal } from "../../Global/GlobalStateContext";
import ICartPurchase from "../../interface/ICartPurchase";

const Wish = () => {
  // const { wish } = useGlobal();
  // console.log("WISH",wish)
  const wish: ICartPurchase[] | null = JSON.parse(
    localStorage.getItem("Wish")!
  );

  return (
    <Main>
      <PhotoBackgroundWish>
        <h1>Desejo</h1>
        <p>home {">"} Desejo</p>
      </PhotoBackgroundWish>
      <MainWishProduct>
        {wish && wish.length > 0 ? (
          wish.map((wishProduct: ICartPurchase) => {
            return <CardWish key={wishProduct.id} {...wishProduct} />;
          })
        ) : (
          <p>Não há produtos na lista de desejos</p>
        )}
      </MainWishProduct>
    </Main>
  );
};

export default Wish;
