import styled from "styled-components";
import slid from "../../assets/slide.webp";
import back from "../../assets/back7.png";
import product from "../../assets/producto1.avif";

export const MainDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;

  margin-bottom: 500px;
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

export const Option = styled.div`
  width: 100%;
  background-image: url(${back});
  background-size: cover;
  display: flex;
  flex-direction: column;
`;

export const OptionName = styled.div`
  height: 20%;
  font-size: 30px;
  text-align: center;
  margin-top: 2rem;
  padding-bottom: 2rem;
`;

export const OptionCategory = styled.div`
  height: 60%;
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;
  justify-content: space-between;
  padding: 0rem 15rem 0rem 15rem;
  flex-wrap: nowrap;
`;

export const OptionCategories = styled.div`
  width: 250px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 25px;
  p {
    margin: 0px 0 15px 0;
    font-weight: 700;
    transition: 0.5s;

    :hover {
      color: #efbae1;
      cursor: pointer;
    }
  }

  .hover-div:hover + .color-div {
    background-color: black;
  }
`;

export const OptionCategoryIcon = styled.a`
  width: 200px;
  height: 200px;
  margin-top: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BestSellerMain = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BestSellerName = styled.div`
  margin-top: 50px;
  p {
    font-size: 30px;
  }
`;

export const BestSellerButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 500px;
  margin-top: 10px;
  flex-wrap: wrap;
`;

export const ButtonSeller = styled.button`
  text-transform: uppercase;
  min-width: 110px;
  height: 42px;
  line-height: 40px;
  border: 1px solid #efbae1;
  font-weight: 500;
  text-align: center;
  padding: 0 15px;
  transition: all .25s linear 0s;

  :hover{
    cursor:pointer;
  }
`;

export const BestSellerProducts = styled.div`
display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-auto-flow: dense;
  gap:50px;
  margin-top:50px;
`;

export const Products = styled.div`
border:1px solid red;
width:300px;
height:400px;
`

export const TwoDiv = styled.div`
width:100%;
height:100vh;
margin-top:50px;
display:flex;
flex-direction: row;
`

export const Offer1 = styled.div`
width:50%;
height:100vh;
background-color: #f2f2f2;

`

export const Offer2 = styled.div`
width:50%;
height:100vh;
background-image: url(${product});
background-size: cover;
`
