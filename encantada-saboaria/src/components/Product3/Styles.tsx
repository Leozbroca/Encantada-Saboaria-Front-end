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
border-bottom:1px solid gray;
display:flex;
flex-direction:row;
justify-content: space-between;
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
background-color:red;
background-image:url(${banner});
background-size: cover;
`

export const DivText = styled.div`
width:375px;
height:65%;

display:flex;
flex-direction: column;

p{
    margin:0;
    font-size:1rem;
}

.price{
    margin-top:30px;
}

`
