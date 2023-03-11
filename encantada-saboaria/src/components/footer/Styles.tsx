import styled from "styled-components";

export const MainFooter = styled.div`
  height: 500px;
  background-color: #f3f3f3;
  width: 100%;

  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const Menu = styled.div`
  height: 80%;
  display: flex;
  justify-content: space-evenly;

  h3 {
    text-transform: uppercase;
    border-bottom: 1px solid black;
  }
  p {
    margin: 0px 0 15px 0;
    font-weight: 700;
    transition: 0.5s;

    ::first-letter {
      text-transform: uppercase;
    }
    :hover {
      color: #efbae1;
      cursor: pointer;
    }
  }
`;
export const IconContact = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
export const MainCopyRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px;
`;

// Para error
export const OptionPaymentIcon = styled.a``;

export const IconsPayment = styled.div`
  display: flex;
  width: 20%;
  justify-content: space-evenly;
  align-items: center;
`;

export const BurnImg = styled.img`

`