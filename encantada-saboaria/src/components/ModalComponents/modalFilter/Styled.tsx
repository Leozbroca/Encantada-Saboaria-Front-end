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
  div {
    padding: 15px;
  }
  border-bottom: 1px solid black;
`;
export const PriceCategories = styled.div`
  div{
    padding: 10px;
    
  }
`;
export const FilterEssenceP = styled.p`
  margin: 0px 0 15px 0;
  font-weight: 700;
  transition: 0.5s;
  font-size: 20px;
  ::first-letter {
    text-transform: uppercase;
  }
  :hover {
    color: #efbae1;
    cursor: pointer;
  }
`;
