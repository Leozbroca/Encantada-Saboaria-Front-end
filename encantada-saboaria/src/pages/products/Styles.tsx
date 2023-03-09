import styled from "styled-components";

export const ProductsScreen = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-flow: dense;
  gap: 50px;
  margin-top: 90px;
  padding: 20px;
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const colors ={
  white:"#ffffff",
  pink:"#ebbaa9"
}

interface isActiveBoolean{
  isActive:boolean,
  activeColor:"white" | "pink"
  activeColor2:"white" | "pink"
}

export const SpanPagination = styled.span<isActiveBoolean>`
  margin: 10px;
  background: ${(props)=> props.isActive ? colors[props.activeColor]:colors[props.activeColor2]};
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
  transition: background-color .3s ease-in-out;
`;
