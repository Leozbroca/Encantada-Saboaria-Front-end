import styled from "styled-components";

export const StyledForm = styled.form`
width:400px;
margin-bottom:50px;
height:400px;
`

export const StyledInput1 = styled.input`
width:100%;
border: 1px solid rgba(0,0,0,0.2);
height:60px;
margin-bottom:10px;
margin-top:20px;
padding-left:20px;

`

export const StyledInput2 = styled.input`
width:100%;
border: 1px solid rgba(0,0,0,0.2);
height:60px;
margin-bottom:20px;
padding-left:20px;
`

export const StyledButton = styled.button`
width:100%;
margin-top:20px;
margin-bottom:20px;
height:60px;
color:white;
background-color: black;
font-weight: 600;
letter-spacing: 2px;
font-size:18px;
transition:.5s;

:hover{
    transition:.5s;
    background-color:#efbae1;
}
`
export const StyledA = styled.a`
color:#c5c4c4;
transition:.5s;

:hover{
    cursor:pointer;
    color:#efbae1;
    transition:.5s;
}
`

export const StyledDiv = styled.div`
width:100%;
height:60px;
border: 1px solid #e8eced;
background-color: #f2f2f2;
display:flex;
justify-content: center;
align-items: center;
`