import React from "react";
import {
  MainDiv,
  PhotoBackgroundProduct,
  MainImageBack,
  WhiteBackground,
  RowInfoUp,
  RowInfoDown,
  RowBox,
  RowBoxImg,
  Space,
  BehindBrand,
  Devs,
  DevsInfo,
  DevsPhoto,
  DevsName
} from "./Styles";
import fundo2 from "../../assets/fundo2.jpg";
import fundo3 from "../../assets/fundo3.jpg";
import leo from "../../assets/leo.jpg";
import mina from "../../assets/mina.jpg";

const About = () => {
  return (
    <MainDiv>
      <PhotoBackgroundProduct>
        <h1>About</h1>
        <p>Home {">"} About</p>
      </PhotoBackgroundProduct>
      <MainImageBack />
      <WhiteBackground>
        <RowInfoUp>
          <RowBox>
            <h1>Our Story</h1>
            <h2>---- THE HIGH STRESS FAVOUTIRE</h2>
            <p>
              Praesent metus tellus, elementum eu, semper a, adipiscing nec,
              purus. Vestibulum volutpat pretium libero. In ut quam vitae odio
              lacinia tincidunt. Etiam ut purus mattis mauris sodales aliquam.
              Aenean massa. In dui magna, posuere eget, vestibulum et, tempor
              auctor, justo. Vivamus consectetuer hendrerit lacus. In hac
              habitasse platea dictumst. Ut tincidunt tincidunt erat. Lorem
              ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
          </RowBox>
          <RowBoxImg src={fundo2}></RowBoxImg>
        </RowInfoUp>
        <RowInfoDown>
          <RowBoxImg src={fundo3}></RowBoxImg>
          <RowBox>
            <h1>Who We Are ?</h1>
            <h2>---- THE HIGH STRESS FAVOUTIRE</h2>
            <p>
              Praesent metus tellus, elementum eu, semper a, adipiscing nec,
              purus. Vestibulum volutpat pretium libero. In ut quam vitae odio
              lacinia tincidunt. Etiam ut purus mattis mauris sodales aliquam.
              Aenean massa. In dui magna, posuere eget, vestibulum et, tempor
              auctor, justo. Vivamus consectetuer hendrerit lacus. In hac
              habitasse platea dictumst. Ut tincidunt tincidunt erat. Lorem
              ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
          </RowBox>
        </RowInfoDown>
      </WhiteBackground>

      <Space></Space>

      <WhiteBackground>
        <BehindBrand>
          <h1>Behind The Brands</h1>
          <p>We are a female-founded, 100% woman-led team of collaborative dreamers who value innovation, curiosity and free-thinking fearlessness in everything that we do. We take immeasurable pride in our work, intentionally stitching love into the very fiber and fabric of our designs. We are small, but we are a mighty group of talented individuals dedicated to bringing you otherworldly designs with imagery to match.</p>
        </BehindBrand>
        <Devs>
          <DevsInfo>
            <DevsPhoto src={fundo2}/>
            <DevsName><h1>Rejane</h1><p>CEO</p></DevsName>
          </DevsInfo>
          <DevsInfo>
          <DevsPhoto src={mina}/>
            <DevsName><h1>Gabriel Mina</h1><p>Desenvolvedor</p></DevsName>
          </DevsInfo>
          <DevsInfo>
          <DevsPhoto src={leo}/>
            <DevsName><h1>Leonardo Broca</h1><p>Desenvolvedor</p></DevsName>
          </DevsInfo>
        </Devs>
      </WhiteBackground>
    </MainDiv>
  );
};

export default About;
