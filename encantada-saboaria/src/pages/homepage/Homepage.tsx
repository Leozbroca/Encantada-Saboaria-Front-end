import React from "react";
import {
  MainDiv,
  Slide,
  SlideMain,
  SlideRow,
  ButtonShop1,
  ButtonShop2,
} from "./Styles";
import slid from "../../assets/slide.webp";

const HomePage = () => {
  return (
    <MainDiv>
      <Slide>
        <SlideMain>
          <h2>Soapin Store</h2>
          <h1>Handmade Soap</h1>
          <p>
            New arrivals with naturre fruits, juice milks,
            <br /> essential for summer.
          </p>
          <SlideRow>
            <ButtonShop1>
              <p>Shop now</p>
            </ButtonShop1>
            <ButtonShop2>
              <p>About us</p>
            </ButtonShop2>
          </SlideRow>
        </SlideMain>
      </Slide>
    </MainDiv>
  );
};

export default HomePage;
