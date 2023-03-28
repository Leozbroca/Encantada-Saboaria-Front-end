import styled from "styled-components";

export const MainPurchase = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: white;
  margin-top: 100px;
  display: flex;
  gap:20px;
  flex-wrap: wrap;
  justify-content: center;
  justify-content: space-between;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const ProductsPurchase = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 0.5;
  
`
export const TotalCash = styled.p`
  font-size: 1.5rem;
  text-align: center;
`