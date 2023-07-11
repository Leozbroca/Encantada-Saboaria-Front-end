import react from "react";
import { Main, PhotoBackgroundWish, MainWishProduct } from "./Styles";
import CardWish from "../../components/CardWish/CardWish";

const Wish = () => {
  return (
    <Main>
      <PhotoBackgroundWish>
        <h1>Desejo</h1>
        <p>home {">"} Desejo</p>
      </PhotoBackgroundWish>
      <MainWishProduct>
        <CardWish />
        <CardWish />
        <CardWish />
      </MainWishProduct>
    </Main>
  );
};

export default Wish;
