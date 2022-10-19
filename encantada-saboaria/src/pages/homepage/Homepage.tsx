import React from "react";
import { MainDiv, Slide, SlideMain, SlideRow } from "./Styles";
import slid from "../../assets/slide.webp";

const HomePage = () => {
  return (
    <MainDiv>
      <Slide>
        <SlideMain>
          <h2>Soapin Store</h2>
          <h1>Handmade Soap</h1>
          <p>
            New arrivals with naturre fruits, juice milks,<br/> essential for summer.
          </p>
          <SlideRow>
            <button>Shop now</button>
            <button>About us</button>
          </SlideRow>
        </SlideMain>
      </Slide>
    </MainDiv>
  );
};

export default HomePage;
