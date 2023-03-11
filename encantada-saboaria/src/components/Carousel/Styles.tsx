import styled from "styled-components";

export const ImgCar = styled.img`
width:252px;
height:252px;
overflow: hidden;
position:relative;

@media (max-width: 1200px) {
    width:200px;
    height:200px;
  }

 
`

export const Main = styled.div`
width:94%;
margin-top:50px;
margin-bottom:50px;
z-index:1;

`

export const CoverImg = styled.div`
box-sizing: border-box;
background-size: contain;
float: left;
overflow:hidden;
background-color: black;


 :hover{
    cursor:pointer;
    transition: all 2s ease;
    opacity:0.7;

    .img{
        transition: all 2s ease;
        opacity:.2;
        transform: scale(1.5);
    }
  }
`