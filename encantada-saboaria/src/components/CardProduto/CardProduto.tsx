import React from "react";
import {Main, Photo} from "./Styles";

export default function CardProduto(props:any){

    return (
    <Main>
        <Photo src={props.foto}/>
        <p className="nome">{props.nome}</p>
        <p className="preco">{new Intl.NumberFormat('pt-BR',{
                                    style:'currency',
                                    currency: 'BRL'
                                }).format(props.preco)} 
</p>
    </Main>
    )
};