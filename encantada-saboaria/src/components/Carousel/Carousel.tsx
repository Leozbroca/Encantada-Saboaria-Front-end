import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import banner from "../../assets/bannerV2-bg.jpg"
import { Main, ImgCar } from "./Styles"

const handleDragStart = (e:any) => e.preventDefault();

const responsive = {
  0: { items: 1},
  500: { items: 2},
  600: { items: 3},
  1600: { items: 4 },
  1800: { items: 5 },
}

const items = [
  <ImgCar src={banner} onDragStart={handleDragStart} role="presentation" />,
  <ImgCar src={banner} onDragStart={handleDragStart} role="presentation" />,
  <ImgCar src={banner} onDragStart={handleDragStart} role="presentation" />,
  <ImgCar src={banner} onDragStart={handleDragStart} role="presentation" />,
  <ImgCar src={banner} onDragStart={handleDragStart} role="presentation" />,
  <ImgCar src={banner} onDragStart={handleDragStart} role="presentation" />,
];

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
    />
    </Main>
  );
}

export default Gallery