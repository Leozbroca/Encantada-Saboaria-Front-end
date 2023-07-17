import styled from "styled-components"


export const ButtonWish = styled.button`
  text-transform: uppercase;
  min-width: 50%;
  height: 42px;
  line-height: 40px;
  border: 1px solid #00033D;
  font-weight: 500;
  text-align: center;
  padding: 0 15px;
  transition: all 0.25s linear 0s;
  margin: 5px;
  background-color: #00033D;
  color: #fff;

  :hover {
    cursor: pointer;
  }

  @media (max-width: 500px) {
    margin-bottom: 8px;
  }
`;