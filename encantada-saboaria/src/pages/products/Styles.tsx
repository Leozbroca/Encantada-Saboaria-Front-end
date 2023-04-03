import styled from "styled-components";
import banner from "../../assets/bannerV2-bg.jpg";
import { device } from "../../constants/breakpoints";

export const Main = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const ButtonFilter = styled.div`
  width: 70%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const OptionSelect = styled.option``;
export const PhotoBackgroundProduct = styled.div`
  width: 100%;
  height: 300px;
  background-image: url(${banner});
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

export const ButtonOfferProduct = styled.button`
  min-width: 150px;
  height: 50px;
  line-height: 40px;
  font-size: 15px;
  letter-spacing: 1px;
  border: 1px solid #111111;
  font-weight: 500;
  text-align: center;
  padding: 0 15px;
  transition: all 0.25s linear 0s;

  :hover {
    cursor: pointer;
  }
`;

export const MainFilterProduct = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  padding:10px;

  @media ${device.mobileS} {
    display:flex;
    align-items:start; 
  }
`;
export const Filter = styled.div``;
export const ProductsScreen = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items:center;
  justify-content:center;
  gap: 50px;
  padding: 20px;
  width: 70%;

  @media ${device.mobileS} {
    width:100%;
  }
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const ProductNotFound = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 800px;
  p {
    font-size: 40px;
  }
`;

const colors = {
  white: "#ffffff",
  pink: "#ebbaa9",
};

interface isActiveBoolean {
  isActive: boolean;
  activeColor: "white" | "pink";
  activeColor2: "white" | "pink";
}

export const SpanPagination = styled.span<isActiveBoolean>`
  /* margin: 10px; */
  background: ${(props) =>
    props.isActive ? colors[props.activeColor] : colors[props.activeColor2]};
  border-color: #ebbaa9;
  color: #000;
  width: 42px;
  height: 42px;
  border: 1px solid #e3e3e3;
  line-height: 42px;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  font-weight: 400;
  margin-right: 9px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
`;
