import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import banner from "../../assets/bannerV2-bg.jpg"
import { ImgCar } from "./Styles"

const handleDragStart = (e:any) => e.preventDefault();

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
    <AliceCarousel mouseTracking items={items} infinite={true} />
  );
}

export default Gallery