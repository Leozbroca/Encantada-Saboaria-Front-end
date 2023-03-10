import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  margin: 100px;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const ButtonFilter = styled.div`
  width: 100%;
`

export const MainFilterProduct = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  
`;
export const Filter = styled.div`
`;
export const ProductsScreen = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px;
  padding: 20px;
  width: 70%;
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
