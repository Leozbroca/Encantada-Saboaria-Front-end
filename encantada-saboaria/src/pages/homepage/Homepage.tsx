import React from "react";
import { useEffect } from "react";
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
  OptionCategoryIcon,
  BestSellerMain,
  BestSellerButtons,
  BestSellerName,
  BestSellerProducts,
  ButtonSeller,
  TwoDiv,
  Offer1,
  Offer2,
  OfferInside,
  ButtonOffer
} from "./Styles";
import slid from "../../assets/slide.webp";
import CardProduto from "../../components/CardProduto/CardProduto";

import { IconContext } from "react-icons";
import { FaSoap } from "react-icons/fa";
import { ImDroplet } from "react-icons/im";
import { GiDelicatePerfume, GiCandleFlame } from "react-icons/gi";
import { useState } from "react";
import useRequestData from "../../hooks/useRequestData";
import { Url } from "../../constants/Url";

const HomePage = () => {
  const [NewColor, SetNewColor] = useState("black");
  const [BackgColor1, SetBackgColor1] = useState("#efbae1");
  const [BackgColor2, SetBackgColor2] = useState("transparent");
  const [BackgColor3, SetBackgColor3] = useState("transparent");
  const [Color1, SetColor1] = useState("white");
  const [Color2, SetColor2] = useState("#efbae1");
  const [Color3, SetColor3] = useState("#efbae1");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const products = useRequestData([], `${Url}/products`)

  const goToPag1 = () => {
    SetBackgColor1("#efbae1");
    SetBackgColor2("transparent");
    SetBackgColor3("transparent");
    SetColor1("white");
    SetColor2("#efbae1");
    SetColor3("#efbae1");
  };

  const goToPag2 = () => {
    SetBackgColor2("#efbae1");
    SetBackgColor1("transparent");
    SetBackgColor3("transparent");
    SetColor1("#efbae1");
    SetColor2("white");
    SetColor3("#efbae1");
  };

  const goToPag3 = () => {
    SetBackgColor3("#efbae1");
    SetBackgColor1("transparent");
    SetBackgColor2("transparent");
    SetColor1("#efbae1");
    SetColor2("#efbae1");
    SetColor3("white");
  };

  const productsList = products.map((product:any) => {
    return <CardProduto 
    key={product.id} 
    nome={product.nome}
    foto={product.foto}
    preco={product.preco}
    />
  })

  console.log(products)
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
              <OptionCategoryIcon
                className="color-div"
                style={{ color: NewColor }}
              >
                <FaSoap />
              </OptionCategoryIcon>
            </IconContext.Provider>

            <p className="hover-div">Sabonetes</p>
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

      <BestSellerMain>
        <BestSellerName>
          <p>Our Best Seller</p>
        </BestSellerName>
        <BestSellerButtons>
          <ButtonSeller
            className="NewArrivals"
            onClick={goToPag1}
            style={{ backgroundColor: BackgColor1, color: Color1 }}
          >
            New Arrivals
          </ButtonSeller>
          <ButtonSeller
            className="BestSeller"
            onClick={goToPag2}
            style={{ backgroundColor: BackgColor2, color: Color2 }}
          >
            Best Seller
          </ButtonSeller>
          <ButtonSeller
            className="TopRates"
            onClick={goToPag3}
            style={{ backgroundColor: BackgColor3, color: Color3 }}
          >
            Top Rates
          </ButtonSeller>
        </BestSellerButtons>
        <BestSellerProducts>
          {productsList}
        </BestSellerProducts>
      </BestSellerMain>

      <TwoDiv>
        <Offer1>
        <OfferInside>
        <h2>Get Up To 15% Off </h2>
        <h2 className="encantada">Encantada Saboaria</h2>
        <p>Highest Quality</p>
        <ButtonOffer>Shop Now - $20</ButtonOffer>
        </OfferInside>
        

        </Offer1>
        <Offer2/>
      </TwoDiv>
    </MainDiv>
  );
};

export default HomePage;
