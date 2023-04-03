import styled from "styled-components";

export const MainHeader = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 90px;
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
   /* box-shadow: 0px 0px 5px 2px gray;  */
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index:5;
  letter-spacing:1px;

  @media (max-width: 600px) {
    height:50px;
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
    height:40px;
    width:40px;
  }
`;

export const MenuLogo = styled.img`
  height: 60px;
  width: 180px;
  background-color: white;
  margin-left: 20px;

  @media (max-width: 600px) {
    height:40px;
    width:120px;
  }
`;

export const MenuOptions = styled.div`
  display: flex;
  flex-direction: row;
  width: 450px;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const Option = styled.a`
  position: relative;
  display: inline-block;
  height: 35px;
  margin-top: 15px;
  background-color: white;
  text-align: center;
  transition: 0.5s;

  :hover {
    color: #efbae1;
    cursor: pointer;
  }

  span {
    display: block;
    position: absolute;
    background: #efbae1;
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
    font-size:14px;
  }
`;

export const MenuItens = styled.div`
  margin-right: 20px;
  display: flex;
  flex-direction: row;
  width: 150px;
  justify-content: space-between;

  @media (max-width: 1200px) {
    width:120px;
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
    color: #efbae1;
    cursor: pointer;
  }

  @media (max-width: 600px) {
    font-size:12px;
    
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
    color: #efbae1;
    cursor: pointer;
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const CartTop = styled.div`
width:100%;
height:50px;
border-bottom:1px solid rgba(0,0,0,0.1);
background-color: #f8f9fa;
`

export const CartInsideTop = styled.div`
width:75%;
height:100%;
border-left:1px solid rgba(0,0,0,0.1);
border-right: 1px solid rgba(0,0,0,0.1);;
margin-left:52px;
text-align: center;
display:flex;
align-items: center;
justify-content: center;
p{
  font-size:18px;
  letter-spacing: 1px;
  font-weight: 600;
}
`

export const CartTopNumber = styled.p`
position:absolute;
top:8px;
right:10px;
font-size: 20px;
font-weight: 600;
`
export const CartBody = styled.div`
width:100%;
height:76.4%;
overflow-y: scroll;
overflow-x: hidden;
  scroll-snap-type: x;
  flex-flow: column wrap;
  &::-webkit-scrollbar {
    width:5px;

  }
  &::-webkit-scrollbar-track {
    background: #e0e0e0;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #2d0c5e;
  }
/* background-color: red; */
`

export const CartBottom = styled.div`
width:100%;
height:8rem;
position:absolute;
bottom:0;
border-top:1px solid rgba(0,0,0,0.1);
background-color: #f8f9fa;
`

export const Total = styled.div`
width:100%;
height:50%;
background-color: white;
display:flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding:0 15px 0 15px;

p{
  font-weight: 600;
  font-size: 18px;
}
`

export const Buttons = styled.div`
width:100%;
height:50%;
display:flex;
flex-direction: row;
`
export const ButtonLeft = styled.button`
width:50%;
transition: 0.5s;
background-color: #2a2a2a;
color:white;
font-size:18px;
letter-spacing: 1px;

:hover{
  transition: 0.5s;
  background-color: pink;
}
`

export const ButtonRight = styled.button`
width:50%;
transition: 0.5s;
background-color:#111111;
color:white;
font-size:18px;
letter-spacing: 1px;

:hover{
  transition: 0.5s;
  background-color: pink;
}
`

export const EmptyCartP = styled.p`
font-size:18px;
font-weight:600;
margin-top:20px;
text-align: center;
`
