import styled from "styled-components";
import { Card } from "@chakra-ui/react";

export const MainCard = styled(Card)`
  max-width: 100%;
  margin: 20px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

interface productColor {
  product: boolean;
}

export const ButtonWish = styled.button<productColor>`
  text-transform: uppercase;
  min-width: 50%;
  height: 42px;
  border: none;
  font-weight: 500;
  text-align: center;
  padding: 0 15px;
  transition: all 0.25s linear 0s;
  margin: 5px;
  background-color: ${(props) => (props.product ? "#00033D" : "#fe0000")};
  color: #fff;
  :hover {
    cursor: pointer;
    filter: brightness(0.8);
  }

  @media (max-width: 500px) {
    margin-bottom: 8px;
  }
`;
