import { Box } from "@chakra-ui/react";
import styled from "styled-components";

export const MainHeader = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: white;

  @media (max-width: 700px) {
    height: 0;
    display: block;
    align-items: initial;
    justify-content: initial;
    background-color: transparent;
  }
`;

export const MainIcons = styled.div`
  width: 40%;
  display: flex;
  align-items: center;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const MenuButton = styled.div`
  height: 60px;
  width: 60px;
  background-color: white;
  border: 1px solid black;
  margin-left: 20px;
  display: none;

  @media (max-width: 1200px) {
    display: flex;
  }

  @media (max-width: 600px) {
    height: 40px;
    width: 40px;
  }
`;

export const MenuLogo = styled.img`
  height: 80px;
  width: 150px;
  background-color: white;
  margin-right: 20px;

  @media (max-width: 600px) {
    height: 40px;
    width: 120px;
  }
`;

export const MenuMain = styled.nav`
  @media (max-width: 600px) {
    display: none;
    align-items: center;
    position: relative;
    flex-direction: row-reverse;
  }
`;

export const MenuOptions = styled.ul`
  display: flex;
  flex-direction: row;
  width: 450px;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const MenuLogoResponsive = styled.span`
  display: none;
  @media (max-width: 600px) {
    display: flex;
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 1.1em;
    max-width: 20ch;
    margin-inline: 0.5rem;
  }
`;

export const Option = styled.li`
  position: relative;
  display: inline-block;
  height: 35px;
  margin-top: 15px;
  background-color: white;
  text-align: center;
  transition: 0.5s;

  :hover {
    color: #00033d;
    cursor: pointer;
  }

  span {
    display: block;
    position: absolute;
    background: #00033d;
    transition: 0.5s;
  }

  span:nth-child(1) {
    left: 0;
    bottom: 0;
    height: 1px;
    width: 100%;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.5s;
  }

  :hover span:nth-child(1) {
    transform: scaleX(1);
    transform-origin: left;
    transition: transform 0.5s;
  }

  p {
    letter-spacing: 1px;
    text-decoration: none;
    font-weight: 600;
    margin: 0;
    text-transform: uppercase;
    font-size: 14px;
  }
`;

export const MenuItens = styled.div`
  margin-right: 20px;
  display: flex;
  flex-direction: row;
  width: 150px;
  justify-content: space-between;

  @media (max-width: 1200px) {
    width: 120px;
    justify-content: space-evenly;
  }
`;

export const MenuItem = styled.a`
  height: 30px;
  width: 30px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  transition: 0.5s;

  :hover {
    color: #00033d;
    cursor: pointer;
  }

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export const MenuItemFlex = styled.div`
  height: 30px;
  width: 30px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;

  :hover {
    color: #00033d;
    cursor: pointer;
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;
