import { Input , chakra } from "@chakra-ui/react";
import styled from "styled-components";

export const MainDraweHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const InputSearch = chakra(Input,{
    baseStyle:{
        
    }
})

export const MainProductSeach = styled.div`
    display: flex;
    flex-wrap: wrap;
    grid-template-columns: repeat(4,1fr);
    overflow-y: auto;
    gap: 10px;
    width: 80%;
    height: 100%;
    margin: 10px;
`
export const SearchInit = styled.p`
    margin: 5px;
    font-size: 20px;
    width: 100%;
`

export const SearchNotFound = styled.p`
    margin: 5px;
    font-size: 20px;
    color:red;
`