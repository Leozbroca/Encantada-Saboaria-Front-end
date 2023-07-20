import { Input, chakra } from "@chakra-ui/react";
import styled from "styled-components";

export const MainDraweHeader = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  margin-left: 30%;
  justify-content: space-between;

  @media (max-width: 500px) {
    width: 100%;
    margin-left: 0%;
  }
`;

export const InputSearch = chakra(Input, {
  baseStyle: {},
});

export const MainProductSeach = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  overflow-y: auto;
  gap: 10px;
  width: 60%;
  height: 100%;
  margin: 10px;

  @media (max-width: 500px) {
    display: flex;
    flex-wrap: wrap;
  }
`;
export const SearchInit = styled.p`
  margin: 5px;
  font-size: 20px;
  width: 100%;
`;

export const SearchNotFound = styled.p`
  margin: 5px;
  font-size: 20px;
  color: red;
`;
