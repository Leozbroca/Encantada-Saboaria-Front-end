import styled from "styled-components";
import slid from "../../assets/slide.webp";

export const MainDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const Slide = styled.div`
  height: 100vh;
  width: 100%;
  margin-top: 90px;
  background-image: url("https://cdn.shopify.com/s/files/1/0635/1231/4071/files/slideshowV1-bg1.jpg?v=1651344874");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;

  @media (max-width: 1400px) {
    height: 80vh;
  }

  @media (max-width: 1300px) {
    height: 70vh;
  }

  @media (max-width: 1200px) {
    height: 60vh;
  }

  @media (max-width: 1000px) {
    height: 50vh;
  }

  @media (max-width: 800px) {
    height: 40vh;
  }
`;

export const SlideMain = styled.div`
  margin-left: 100px;
  height: 35%;
  width: 50%;
  display: flex;
  flex-direction: column;

  h1,
  h2 {
    letter-spacing: 1px;
  }

  @media (max-width: 1499px) {
    p,
    h1,
    h2,
    a {
      margin: 0;
      margin-left: 100px;
    }
    h2 {
      font-size: 18px;
      color: #666666;
      text-decoration: bold;
      margin-bottom: 10px;
    }
    h1 {
      font-size: 60px;
      color: #000000;
      margin-bottom: 20px;
    }
    p {
      font-size: 16px;
      color: #666666;
      margin-bottom: 30px;
    }
  }

  @media (min-width: 1500px) {
    p,
    h1,
    h2,
    a {
      margin: 0;
      margin-left: 100px;
    }
    h2 {
      font-size: 20px;
      color: #666666;
      text-decoration: bold;
      margin-bottom: 10px;
    }
    h1 {
      font-size: 70px;
      color: #000000;
      margin-bottom: 25px;
    }
    p {
      font-size: 18px;
      color: #666666;
      margin-bottom: 35px;
    }
  }
`;

export const SlideRow = styled.a`
  display: flex;
  flex-direction: row;
  width: 340px;
  justify-content: space-between;
`;

export const ButtonShop1 = styled.button`
  height: 45px;
  width: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #efbae1;
  border: none;
  transition: 0.5s;

  p {
    margin: 0;
    font-weight: 500;
    font-size: 17px;
    letter-spacing: 1px;
    color: white;
  }

  :hover {
    background-color: gray;
    transition: 0.5s;
    cursor: pointer;
  }
`;
export const ButtonShop2 = styled.button`
  height: 45px;
  width: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  border: none;

  p {
    margin: 0;
    font-weight: 500;
    font-size: 17px;
    letter-spacing: 1px;
    color: white;
  }

  :hover {
    background-color: #efbae1;
    transition: 0.5s;
    cursor: pointer;
  }
`;
