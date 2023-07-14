import styled from "styled-components";
import { Modal } from "@chakra-ui/react";
import { device } from "../../../constants/breakpoints";

export const ModalMain = styled(Modal)`
  width: 100px;
  && {
    max-width: 100%;

    background-color: red;
  }
`;

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
`;

export const ProductButtonOptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const ButtonShopping = styled.button`
width:100%;
transition: 0.5s;
background-color: #fff;
color:#000;
font-size:18px;
letter-spacing: 1px;
border: 1px solid pink;
border-radius: 10px;
:hover{
  transition: 0.5s;
  background-color: pink;
}
`