import styled from "styled-components";
import wishPhoto from "../../assets/backgroundWish.png";

export const Main = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const PhotoBackgroundWish = styled.div`
  width: 100%;
  height: 500px;
  background-image: url(${wishPhoto});
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    color: white;
    font-size: 28px;
    margin: 0;
  }

  h1 {
    color: white;
    font-size: 40px;
  }
`;

export const MainWishProduct = styled.div`
  min-width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  p {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
  }
  /* @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
  } */
`;
