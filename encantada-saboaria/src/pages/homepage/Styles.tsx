import styled from "styled-components";
import slid from '../../assets/slide.webp'

export const MainDiv = styled.div`
width:100%;
height:100%;
background-color:white;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

-moz-user-select: none;
   -khtml-user-select: none;
   -webkit-user-select: none;
   -ms-user-select: none;
   user-select: none;
`;

export const Slide = styled.div`
height:100vh;
width:100%;
margin-top:90px;
background-image: url("https://cdn.shopify.com/s/files/1/0635/1231/4071/files/slideshowV1-bg1.jpg?v=1651344874");
background-position:center center;
background-repeat: no-repeat;
background-size: cover;
display:flex;
align-items: center;

@media (max-width: 1400px) {
    height:80vh;
}

@media (max-width: 1300px) {
    height:70vh;
}

@media (max-width: 1200px) {
    height:60vh;
}

@media (max-width: 1000px) {
    height:50vh;
}

@media (max-width: 800px) {
    height:40vh;
}
`

export const SlideMain = styled.div`
    margin-left:20px;
    height:35%;
    width:50%;
    display:flex;
    flex-direction: column;

    h1, h2{
        letter-spacing:1px;
    }
    

    @media (max-width: 1499px) {
        p, h1, h2, a{
            margin:0;
            margin-left:100px;
        }
        h2{
            font-size: 18px;
            color:#666666;
            text-decoration:bold;
            margin-bottom:10px;
        }
        h1{
            font-size: 60px;
            color:#000000;
            margin-bottom:20px;
        }
        p{
            font-size: 16px;
            color:#666666;
            margin-bottom:30px;
        }
    }

    @media (min-width: 1500px) {
        p, h1, h2, a{
            margin:0;
            margin-left:100px;
        }
        h2{
            font-size: 20px;
            color:#666666;
            text-decoration:bold;
            margin-bottom:10px;
        }
        h1{
            font-size: 70px;
            color:#000000;
            margin-bottom:25px;
        }
        p{
            font-size: 18px;
            color:#666666;
            margin-bottom:35px;
        }
    }
`

export const SlideRow = styled.a`
    display:flex;
    flex-direction: row;
    width:150px;
    justify-content: space-between;
`
