import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import banner from "../../assets/bannerV2-bg.jpg"
import { Main, ImgCar, CoverImg, DivLogo, Blank } from "./Styles"
import insta1 from "../../assets/insta1.jpeg"
import insta2 from "../../assets/insta2.jpeg"
import insta3 from "../../assets/insta3.jpeg"
import insta4 from "../../assets/insta4.jpeg"
import insta5 from "../../assets/insta_new_5.jpeg"
import insta6 from "../../assets/insta6.jpeg"
import { IconContext } from "react-icons";
import { FaSoap } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const handleDragStart = (e:any) => e.preventDefault();

const responsive = {
  400: { items: 1},
  500: { items: 2},
  600: { items: 3},
  1200: { items: 4 },
  1400: { items: 5 },
}

const items = [
  <CoverImg><ImgCar className="img" src={insta1} onDragStart={handleDragStart} role="presentation" /><DivLogo className="logo" href="https://www.instagram.com/p/Cjf7kotO_DJ/" target="_blank"><GrInstagram style={{position:"absolute"}} className="insta"/></DivLogo></CoverImg>,
  <CoverImg><ImgCar className="img" src={insta2} onDragStart={handleDragStart} role="presentation" /><DivLogo className="logo" href="https://www.instagram.com/p/Cjf5HyFO1Uc/" target="_blank"><GrInstagram style={{position:"absolute"}} className="insta"/></DivLogo></CoverImg>,
  <CoverImg><ImgCar className="img" src={insta3} onDragStart={handleDragStart} role="presentation" /><DivLogo className="logo" href="https://www.instagram.com/p/Cjf4wHqOzIf/" target="_blank"><GrInstagram style={{position:"absolute"}} className="insta"/></DivLogo></CoverImg>,
  <CoverImg><ImgCar className="img" src={insta4} onDragStart={handleDragStart} role="presentation" /><DivLogo className="logo" href="https://www.instagram.com/p/ChiKV24PAEU/" target="_blank"><GrInstagram style={{position:"absolute"}} className="insta"/></DivLogo></CoverImg>,
  <CoverImg><ImgCar className="img" src={insta5} onDragStart={handleDragStart} role="presentation" /><DivLogo className="logo" href="https://www.instagram.com/p/ChiGM8rucb8/" target="_blank"><GrInstagram style={{position:"absolute"}} className="insta"/></DivLogo></CoverImg>,
  <CoverImg><ImgCar className="img" src={insta6} onDragStart={handleDragStart} role="presentation" /><DivLogo className="logo" href="https://www.instagram.com/p/CgDeHVOOOSj/" target="_blank"><GrInstagram style={{position:"absolute"}} className="insta"/></DivLogo></CoverImg>,
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