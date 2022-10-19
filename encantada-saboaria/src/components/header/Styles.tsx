import styled from "styled-components";

export const MainHeader = styled.div`
position:fixed;
top:0;
width:100%;
height:90px;
background-color:white;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
/* box-shadow: 0px 0px 5px 1px gray; */

-moz-user-select: none;
   -khtml-user-select: none;
   -webkit-user-select: none;
   -ms-user-select: none;
   user-select: none;
`;

export const MenuButton = styled.div`
height:60px;
width:60px;
background-color:white;
border:1px solid black;
margin-left:20px;
display:none;

@media (max-width: 1200px) {
    display: flex;
  }
`;

export const MenuLogo = styled.img`
height:60px;
width:180px;
background-color:white;
margin-left:20px;
`;

export const MenuOptions = styled.div`
display:flex;
flex-direction: row;
width:450px;
justify-content: space-between;
align-items:center;

@media (max-width: 1200px) {
    display: none;
  }
`

export const Option = styled.a`
position:relative;
display:inline-block;
height:35px;
margin-top:15px;
background-color:white;
text-align: center;
transition: 0.5s;


:hover{
  color:#efbae1;
  cursor:pointer;
}

span{
  display:block;
  position:absolute;
  background: #efbae1;
  transition: 0.5s;
}

span:nth-child(1){
  left:0;
  bottom:0;
  height:1px;
  width:100%;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.5s;
}

:hover span:nth-child(1){
  transform: scaleX(1);
  transform-origin: left;
  transition: transform 0.5s;
}

p{
  
  font-size:17px;
  letter-spacing: 1px;
  text-decoration: none;
  font-weight: 600;
  margin:0;
  text-transform: uppercase;
}
`

export const MenuItens = styled.div`
margin-right:20px;
display:flex;
flex-direction: row;
width:150px;
justify-content: space-between;
`;

export const MenuItem = styled.a`
height:30px;
width:30px;
background-color:white;
display:flex;
justify-content: center;
align-items: center;
color:black;
transition: 0.5s;

:hover{
  color:#efbae1;
  cursor: pointer;
}
`


export const MenuItemFlex = styled.div`
height:30px;
width:30px;
background-color:white;
display:flex;
justify-content: center;
align-items: center;
transition: 0.5s;

:hover{
  color:#efbae1;
  cursor: pointer;
}

@media (max-width: 1200px) {
    display: none;
  }
`;
