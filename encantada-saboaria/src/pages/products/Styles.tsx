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

export const SpanPagination = styled.span`
  margin: 10px;
  background: #ebbaa9;
  border-color: #ebbaa9;
  color: #fff;
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
