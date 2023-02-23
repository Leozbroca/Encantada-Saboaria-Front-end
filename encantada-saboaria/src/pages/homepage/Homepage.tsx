import React from "react";
import {
  MainDiv,
  Slide,
  SlideMain,
  SlideRow,
  ButtonShop1,
  ButtonShop2,
  Option,
  OptionName,
  OptionCategory,
  OptionCategories,
  OptionCategoryIcon
} from "./Styles";
import slid from "../../assets/slide.webp";

import { IconContext } from "react-icons";
import { FaSoap } from "react-icons/fa";
import { ImDroplet } from "react-icons/im";
import { GiDelicatePerfume, GiCandleFlame } from "react-icons/gi";

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
      <Option>
        <OptionName>Shop By Category</OptionName>
        <OptionCategory>
          <OptionCategories>
            
          <IconContext.Provider
          value={{ className: "global-class-name", size: "3em" }}
        >
          <OptionCategoryIcon>
            <FaSoap />
          </OptionCategoryIcon>
        </IconContext.Provider>

            <p>Sabonetes</p>
          </OptionCategories>
          <OptionCategories>
          <IconContext.Provider
          value={{ className: "global-class-name", size: "3em" }}
        >
          <OptionCategoryIcon>
            <GiDelicatePerfume />
          </OptionCategoryIcon>
        </IconContext.Provider>
            <p>Difusor de aromas</p>
          </OptionCategories>
          <OptionCategories>
          <IconContext.Provider
          value={{ className: "global-class-name", size: "3em" }}
        >
          <OptionCategoryIcon>
            <ImDroplet />
          </OptionCategoryIcon>
        </IconContext.Provider>
            <p>Água para lenços</p>
          </OptionCategories>
          <OptionCategories>
          <IconContext.Provider
          value={{ className: "global-class-name", size: "3em" }}
        >
          <OptionCategoryIcon>
            <GiCandleFlame />
          </OptionCategoryIcon>
        </IconContext.Provider>
            <p>Velas Aromáticas</p>
          </OptionCategories>
        </OptionCategory>
      </Option>
    </MainDiv>
  );
};

export default HomePage;
