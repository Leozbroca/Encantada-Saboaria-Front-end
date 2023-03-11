import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import banner from "../../assets/bannerV2-bg.jpg"
import { Main, ImgCar, CoverImg } from "./Styles"
import insta1 from "../../assets/insta1.jpeg"
import insta2 from "../../assets/insta2.jpeg"
import insta3 from "../../assets/insta3.jpeg"
import insta4 from "../../assets/insta4.jpeg"
import insta5 from "../../assets/insta5.jpeg"
import insta6 from "../../assets/insta6.jpeg"

const handleDragStart = (e:any) => e.preventDefault();

const responsive = {
  400: { items: 1},
  500: { items: 2},
  700: { items: 3},
  1000: { items: 4 },
  1500: { items: 5 },
}

const items = [
  <CoverImg><ImgCar className="img" src={insta1} onDragStart={handleDragStart} role="presentation" /></CoverImg>,
  <CoverImg><ImgCar className="img" src={insta2} onDragStart={handleDragStart} role="presentation" /></CoverImg>,
  <CoverImg><ImgCar className="img" src={insta3} onDragStart={handleDragStart} role="presentation" /></CoverImg>,
  <CoverImg><ImgCar className="img" src={insta4} onDragStart={handleDragStart} role="presentation" /></CoverImg>,
  <CoverImg><ImgCar className="img" src={insta5} onDragStart={handleDragStart} role="presentation" /></CoverImg>,
  <CoverImg style={{position:"relative"}}><ImgCar className="img" src={insta6} onDragStart={handleDragStart} role="presentation" /></CoverImg>,
]

const Gallery = () => {
  return (
    <Main>
    <AliceCarousel mouseTracking items={items} 
    infinite={true} 
    responsive={responsive} 
    controlsStrategy="alternate"
    autoPlay={true}
    autoPlayInterval={8000}
    keyboardNavigation={true}
    disableButtonsControls={true}
    />
    </Main>
  );
}

export default Gallery