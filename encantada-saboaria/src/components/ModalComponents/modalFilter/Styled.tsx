import styled from "styled-components";

export const Main = styled.div``;
export const Filter = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  min-height: 400px;
  font-family: SofiaPro;
  
  h1 {
    font-size: 30px;
    text-align: center;
  }
`;

export const CategoriesFilter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  div {
    display: inline-block;
    font-size: 16px;
    color: #333;
    transition: font-size 0.3s, color 0.3s;
    cursor: pointer;
  }
`;
export const PriceCategories = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  font-size: 1rem;
`;
export const FilterEssenceP = styled.p`
  margin: 0px 0 15px 0;
  font-weight: 700;
  font-size: 20px;

  ::first-letter {
    text-transform: uppercase;
  }

  :hover {
    font-size: 20px;
    color: #00033d;
  }
`;
