import styled from 'styled-components';
  
export const Heading = styled.h1`
   text-align: center;
   color: green;
`;
  
export const Content = styled.div`
   overflow-y: scroll;
   height: 2500px;
`;
  
export const Button = styled.div`
   position: fixed; 
   width: 2.5rem;
   height:2.5rem;
   bottom: 100px;
   right:15px;
   padding-top:7px;
   z-index: 1;
   cursor: pointer;
   color: pink;
   transition: all .3s;
    text-align: center;
   background-color: white;
   box-shadow:0 0 3px 2px #0000001a;
`