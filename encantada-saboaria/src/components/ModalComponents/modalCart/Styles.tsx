import styled from "styled-components";
import { Modal } from "@chakra-ui/react";
import { device } from "../../../constants/breakpoints";

export const ModalMain = styled(Modal)``;

export const MainModalProduct = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 500px) {
    justify-content: space-between;
  }
`;

export const ProductPhoto = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 200px;
    width: 200px;
  }
  p::first-letter {
    text-transform: uppercase;
  }
`;

export const ProductButtonOptions = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const StrongQtdShops = styled.strong`
  color: #00033D;
`;

export const ButtonShopping = styled.button`
  width: 100%;
  transition: 0.5s;
  background-color: #00033D;
  color: #fff;
  font-size: 18px;
  border: 1px solid "#00033D";
  :hover {
    filter: brightness(0.8);
  }
`;
