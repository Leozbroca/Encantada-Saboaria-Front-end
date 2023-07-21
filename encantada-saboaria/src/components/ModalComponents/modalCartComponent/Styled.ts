import styled from "styled-components";

export const CartTop = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #f8f9fa;
`;

export const CartInsideTop = styled.div`
  width: 75%;
  height: 100%;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  margin-left: 52px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-size: 18px;
    letter-spacing: 1px;
    font-weight: 600;
  }
`;

export const CartTopNumber = styled.p`
  position: absolute;
  top: 8px;
  right: 10px;
  font-size: 20px;
  font-weight: 600;
`;

export const CartBody = styled.div`
  width: 100%;
  height: 76.4%;
  overflow-y: scroll;
  overflow-x: hidden;
  scroll-snap-type: x;
  flex-flow: column wrap;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background: #e0e0e0;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #2d0c5e;
  }
  /* background-color: red; */
`;

export const CartBottom = styled.div`
  width: 100%;
  height: 8rem;
  position: absolute;
  bottom: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #f8f9fa;
`;

export const Total = styled.div`
  width: 100%;
  height: 50%;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px 0 15px;

  p {
    font-weight: 600;
    font-size: 18px;
  }
`;

export const Buttons = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
`;
export const ButtonLeft = styled.button`
  width: 50%;
  transition: 0.5s;
  background-color: #2a2a2a;
  color: white;
  font-size: 18px;
  letter-spacing: 1px;

  :hover {
    transition: 0.5s;
    background-color: "#00033D";
  }
`;

export const ButtonRight = styled.button`
  width: 50%;
  transition: 0.5s;
  background-color: #111111;
  color: white;
  font-size: 18px;
  letter-spacing: 1px;

  :hover {
    transition: 0.5s;
    background-color: "#00033D";
  }
`;

export const EmptyCartP = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin-top: 20px;
  text-align: center;
`;
