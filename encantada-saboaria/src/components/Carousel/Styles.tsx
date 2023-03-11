import styled from "styled-components";

export const ImgCar = styled.img`
width:252px;
height:252px;
overflow: hidden;
position:relative;
transition: all 1s ease;
 
`

export const Main = styled.div`
max-width:1400px;
width:100%;
margin-top:50px;
margin-bottom:50px;
z-index:1;
display:flex;
flex-direction:row;

`

export const CoverImg = styled.div`
box-sizing: border-box;
background-size: contain;
float: left;
overflow:hidden;
background-color: black;
opacity:0.9;

.insta{
    opacity:0;
    transition: all 1s ease;
    width:50px;
    height:50px;
    color:white;
    position:absolute;

    :hover{
        cursor:pointer;
        color:pink;
        transition: all 1s ease;
    }
}

.logo{
    width:50px;
    height:50px;
    position:absolute;
}

 :hover{
    transition: all 1s ease;
    opacity:0.9;

    .img{
        transition: all 1s ease;
        opacity:.2;
        transform: scale(1.2);
    }

    .insta{
        opacity:1;
        transition: all 1s ease;
    }
  }

  display:flex;
  justify-content: center;
  align-items: center;
`

export const DivLogo = styled.a`
margin:0;
padding:0;
`

export const Blank = styled.div`
position:absolute;
padding:5px;
width:10px;
height:252px;
margin-left:1395px;
background-color:white;
`