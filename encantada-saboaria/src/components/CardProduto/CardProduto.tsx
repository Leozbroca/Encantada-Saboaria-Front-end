import React from "react";
import { Main, Photo } from "./Styles";

interface IProps {
  nome: string;
  foto: string;
  preco: number;
}
export default function CardProduto({ nome, foto, preco }: IProps) {
  return (
    <Main>
      <Photo src={foto} />
      <p className="nome">{nome}</p>
      <p className="preco">
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(preco)}
      </p>
    </Main>
  );
}
