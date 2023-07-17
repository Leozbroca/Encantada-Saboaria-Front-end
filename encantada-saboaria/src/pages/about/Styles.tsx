import styled from "styled-components";
import banner from "../../assets/bannerV2-bg.jpg";
import fundo from "../../assets/fundo1.jpg"

export const MainDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent;
  margin-top: 100px;

  display: flex;
  flex-direction: column;


  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const MainImageBack = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${fundo});
  background-size: cover;
  position:fixed;
  top:0;
  left:0;
  z-index:-5;


  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const PhotoBackgroundProduct = styled.div`
  width: 100%;
  height: 300px;
  background-image: url(${banner});
  background-size: cover;
  margin-top:-10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    color: white;
    font-size: 16px;
    margin: 0;
  }

  h1 {
    color: white;
    font-size: 40px;
  }
`;


export const WhiteBackground = styled.div`
background-color:white;
display:flex;
flex-direction:column;
height:100%;
justify-content:center;
align-items:center;
`

export const RowInfoUp = styled.div`
margin-top:50px;
height:500px;
width:90%;
display:flex;
flex-direction:row;
justify-content:space-around;
`

export const RowInfoDown = styled.div`
margin-top:50px;
height:500px;
width:90%;
display:flex;
flex-direction:row;
justify-content:space-around;
margin-bottom:100px;
`

export const RowBox = styled.div`
height:500px;
width:48%;
display:flex;
flex-direction: column;
justify-content:center;

h1{
  font-size:40px;
  font-weight:500;
  font-style:normal;
  padding:10px;
}

h2{
  font-size:12px;
  font-weight:500;
  font-style:normal;
  color: #969696;

  padding:10px;
}

p{
  font-size:15px;
  font-weight:400;
  font-style:normal;
  color: #969696;

  padding:10px;
}
`

export const RowBoxImg = styled.img`
height:500px;
width:48%;
`

export const Space = styled.div`
height:400px;
width:100%;
background-color:black;
opacity:0.5;
`

export const BehindBrand = styled.div`
height:200px;
width:70%;
display:flex;
flex-direction:column;
align-items:center;
margin-top:50px;


h1{
font-size:55px
}

p{
  font-size:16px
}
`

export const Devs = styled.div`
height:350px;
width:70%;
display:flex;
flex-direction:row;
justify-content: space-around;
margin-bottom:50px;
`

export const DevsInfo = styled.div`
height:100%;
width:25%;
display:flex;
flex-direction:column;
justify-content: space-around;
align-items:center;
/* border:1px solid red; */
`

export const DevsPhoto = styled.img`
height:200px;
width:200px;
border-radius:180px;

-moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

export const DevsName = styled.div`
width:70%;
display:flex;
flex-direction:column;
justify-content: space-around;
text-align:center;


h1{
font-size:22px;
margin-bottom:10px;
}

p{
font-size:16px;
color: #969696;
}
`