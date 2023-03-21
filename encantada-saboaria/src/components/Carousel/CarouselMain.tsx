import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import banner from "../../assets/bannerV2-bg.jpg";
import {
  Main2,
  ImgCar,
  CoverImg2,
  DivLogo,
  Blank,
  SlideMain,
  SlideRow,
  ButtonShop1,
  ButtonShop2,
  ImgCar2,
} from "./Styles";
import insta1 from "../../assets/slide.webp";
import insta2 from "../../assets/insta2.jpeg";
import insta3 from "../../assets/insta3.jpeg";
import insta4 from "../../assets/insta4.jpeg";
import insta5 from "../../assets/insta_new_5.jpeg";
import insta6 from "../../assets/insta6.jpeg";
import { IconContext } from "react-icons";
import { FaSoap } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const handleDragStart = (e: any) => e.preventDefault();

const items = [
  <CoverImg2>
    <ImgCar2 src={insta1} onDragStart={handleDragStart} role="presentation"></ImgCar2>
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
  </CoverImg2>,
  <CoverImg2 onDragStart={handleDragStart} role="presentation">
<ImgCar2 src={insta2} onDragStart={handleDragStart} role="presentation"></ImgCar2>
    <SlideMain>
      <h2>100% health and affordable</h2>
      <h1>Natural Soap</h1>

      <p>
        Organic food is in the heart of what we do.
        <br /> Our organic whole foods are high quality.
      </p>
  
    </SlideMain>
  </CoverImg2>,
];

const GalleryMain = () => {
  return (
    <Main2>
      <AliceCarousel
        // mouseTracking
        items={items}
        animationType="fadeout"
        animationDuration={1000}
        // infinite={true}
        // responsive={responsive}
        // controlsStrategy="alternate"
        // autoPlay={true}
        // autoPlayInterval={8000}
        // keyboardNavigation={true}
        disableButtonsControls={true}
        // disableDotsControls={true}
      />
    </Main2>
  );
};

export default GalleryMain;
