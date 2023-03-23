import { assertDeclareExportAllDeclaration } from "@babel/types";
import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: "Bree Serif", serif;
    border-bottom:1px solid rgba(0,0,0,0.2);
  justify-content: space-around;
`

export const Photo = styled.div`
width:80px;
height:80px;
`

export const InfoProduct = styled.div`
width:320px;
height:80px;
display:flex;
flex-direction: column;

h1{
    font-weight: 600;
    letter-spacing: 1px;
}
`

export const NameAndDelete = styled.div`
width:100%;
display:flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding-right:10px;
`

export const Icon = styled.a`
transition:.5s;
:hover{
    color:pink;
    cursor: pointer;
    transition:.5s;
}
`