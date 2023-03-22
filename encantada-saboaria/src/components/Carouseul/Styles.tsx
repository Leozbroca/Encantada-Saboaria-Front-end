import styled from "styled-components";

export const MainProductDetailCarousel = styled.div`
  max-width: 1400px;
  margin: 0;
  padding: 0;
  width: 100%;
  margin-top: 50px;
  margin-bottom: 50px;
  z-index: 1;
  display: flex;
  flex-direction: row;
  div {
    div {
      div {
        ul {
         li{
          /* border: 1px solid black; */
          /* margin-left: 10px; */
         }
        }
      }
    }
  }
`;

export const Main2 = styled.div`
  min-width: 100vw;
  width: 100%;
  margin-top: 90px;
  margin-bottom: 50px;
  z-index: 1;
  display: flex;
  flex-direction: row;
`;

export const CoverImg = styled.div`
  box-sizing: border-box;
  background-size: contain;
  float: left;
  overflow: hidden;
  background-color: black;
  opacity: 0.9;
  width: 92%;
  margin-left: 4%;
  margin-right: 4%;

  .insta {
    opacity: 0;
    transition: all 1s ease;
    width: 50px;
    height: 50px;
    color: white;
    position: absolute;

    :hover {
      cursor: pointer;
      color: pink;
      transition: all 1s ease;
    }
  }

  .logo {
    width: 50px;
    height: 50px;
    position: absolute;
  }

  :hover {
    transition: all 1s ease;
    opacity: 0.9;

    .img {
      transition: all 1s ease;
      opacity: 0.2;
      transform: scale(1.3);
    }

    .insta {
      opacity: 1;
      transition: all 1s ease;
    }
  }

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivLogo = styled.a`
  margin: 0;
  padding: 0;
`;

export const Blank = styled.div`
  position: absolute;
  padding: 5px;
  width: 10px;
  height: 252px;
  margin-left: 1395px;
  background-color: white;
`;

export const CoverImg2 = styled.div`
  width: 100%;
  height: 100%;
  max-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ImgCar2 = styled.img`
  background-size: cover;
  width: 100%;
  height: 100%;
`;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const SlideMain = styled.div`
  top: 100px;
  left: 50px;
  height: 35%;
  width: 50%;
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 2;
  flex-wrap: nowrap;

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

  @media (max-width: 1200px) {
    h2 {
      font-size: 16px;
      margin-bottom: 10px;
    }
    h1 {
      font-size: 50px;
      margin-bottom: 20px;
    }
    p {
      font-size: 14px;
      margin-bottom: 30px;
    }
  }
  @media (max-width: 1000px) {
    top: 80px;
    h2 {
      font-size: 14px;
      margin-bottom: 10px;
    }
    h1 {
      font-size: 40px;
      margin-bottom: 20px;
    }
    p {
      font-size: 12px;
      margin-bottom: 30px;
    }
  }
  @media (max-width: 900px) {
    top: 70px;
  }
  @media (max-width: 800px) {
    top: 60px;
    h2 {
      font-size: 12px;
      margin-bottom: 10px;
    }
    h1 {
      font-size: 30px;
      margin-bottom: 20px;
    }
    p {
      font-size: 10px;
      margin-bottom: 30px;
    }
  }
  @media (max-width: 700px) {
    top: 50px;
  }
  @media (max-width: 600px) {
    top: 40px;
  }
  @media (max-width: 500px) {
    top: 30px;
  }
  @media (max-width: 400px) {
    top: 20px;
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
