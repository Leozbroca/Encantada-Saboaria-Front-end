import styled from "styled-components";

export const MainResponsive = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

interface MenuColor {
  active: boolean;
}

export const MenuMainResponsive = styled.div<MenuColor>`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: ${(props) => (props.active ? " #fff" : " #000")};
  background-color: ${(props) => (props.active ? " #00033D" : " #fff")};
  border-bottom: 1px solid black;
`;

export const LoginMainResponsive = styled.div<MenuColor>`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: ${(props) => (props.active ? " #fff" : " #000")};
  background-color: ${(props) => (props.active ? " #00033D" : " #fff")};
  border-bottom: 1px solid black;
`;

export const StyledMenuForm = styled.form`
  width: 100%;
  padding:5px;
`;

export const StyledMenuInput1 = styled.input`
  width: 100%;
  border: 1px solid #00033d;
  height: 60px;
  margin-bottom: 10px;
  margin-top: 20px;
  padding-left: 20px;
`;

export const StyledMenuInput2 = styled.input`
  width: 100%;
  border: 1px solid #00033d;
  height: 60px;
  margin-bottom: 20px;
  padding-left: 20px;
`;

export const StyledMenuButton = styled.button`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  height: 60px;
  color: white;
  background-color: #00033d;
  font-weight: 600;
  letter-spacing: 2px;
  font-size: 18px;
  transition: 0.5s;

  :hover {
    transition: 0.5s;
    background-color: #00033d;
  }
`;
export const StyledMenuA = styled.a`
  color: #c5c4c4;
  transition: 0.5s;

  :hover {
    cursor: pointer;
    color: #00033d;
    transition: 0.5s;
  }
`;

export const StyledMenuDiv = styled.div`
  width: 100%;
  height: 60px;
  border: 1px solid #00033d;
  background-color: #00033d;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;
