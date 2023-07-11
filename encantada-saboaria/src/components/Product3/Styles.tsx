import styled from "styled-components";
import banner from "../../assets/bannerV2-bg.jpg"

export const Main = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction: column;

`
export const DivRow2 = styled.div`
width:100%;
height:30%;
border-bottom: 1px solid rgba(0,0,0,0.2);
display:flex;
flex-direction:row;
align-items:center;
`

export const DivRow3 = styled.div`
width:100%;
height:30%;
display:flex;
flex-direction:row;
justify-content: space-between;
align-items:center;
`

export const DivPhoto = styled.div`
width:75px;
height:75px;
background-image:url(${banner});
background-size: cover;
outline: 0 !important;
box-sizing: border-box;
position:absolute;

:hover{
    cursor:pointer;
}
`

export const DivText = styled.div`
width:320px;
margin-left:90px;
display:flex;
flex-direction: column;
position:absolute;

p{
    margin:0;
    font-size:1rem;
    margin-bottom:5px;
    max-width:320px;
}

.price{
    margin-top:0px;
}

.name {
    transition:.5s;
    
@media (max-width: 1000px) {
    font-size:12px;
  }
    :hover{
        transition: .5s;
        cursor:pointer;
        color: #efbae1;
    }
}

`
export const StarRow = styled.div`
display:flex;
flex-direction: row;
height:20px;
flex-wrap: wrap;
`